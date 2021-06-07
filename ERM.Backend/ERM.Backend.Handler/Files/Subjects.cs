using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ERM.Backend.Handler.Files
{
    public class Subjects
    {
        public Dictionary<string, Dictionary<string, List<object>>> GetAll()
        {
            var allDirections = new DirectionInfo().GetAllFullNames();
            bool contentIsStart = false;

            Dictionary<string, Dictionary<string, List<object>>> content = new Dictionary<string, Dictionary<string, List<object>>>();
            foreach (var direction in allDirections)
            {
                contentIsStart = false;
                Dictionary<string, List<object>> currentDirection = new Dictionary<string, List<object>>();
                foreach (var row in new XLWorkbook(direction).Worksheet(1).Rows())
                {
                    if (row.Cells().Any(c => c.GetString().ToLower().Contains("план учебного процесса")))
                        contentIsStart = true;

                    if (row.Cells().Any(c => c.GetString().Contains("Факультативные дисциплины")))
                        contentIsStart = false;

                    if (contentIsStart)
                    {
                        bool codeIsSkiped = false;
                        string subject = "";
                        foreach (var cell in row.Cells())
                        {
                            if (!String.IsNullOrEmpty(cell.GetString()))
                            {
                                if (String.IsNullOrEmpty(subject))
                                {
                                    if (codeIsSkiped)
                                    {
                                        subject = cell.GetString();
                                        currentDirection[subject.Trim()] = new List<object>();
                                    }
                                    else
                                    {
                                        codeIsSkiped = true;
                                    }
                                }
                                else
                                {
                                    var currentColumn = cell.WorksheetColumn();
                                    string columnName = "";
                                    for (int index = cell.Address.RowNumber - 1; index > 0; index--)
                                    {
                                        if (currentColumn.Cell(index).GetString().Split(new char[] { ',', ' ' }).Any(c => !int.TryParse(c, out _)))
                                        {
                                            columnName = currentColumn.Cell(index).GetString();
                                            break;
                                        }
                                    }
                                    currentDirection[subject.Trim()].Add(new { Name = columnName, Value = cell.GetString() });
                                }
                            }
                        }
                    }
                }

                content[direction.Split(new char[] { '.', '\\', '-' })[2]] = currentDirection;
            }

            return content;
        }
    }
}
