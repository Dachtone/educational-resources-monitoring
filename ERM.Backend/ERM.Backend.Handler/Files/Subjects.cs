using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ERM.Backend.Handler.Files
{
    public class Subjects
    {
        public Dictionary<string, Dictionary<string, List<string>>> GetAll()
        {
            var allDirections = new DirectionInfo().GetAllFullNames();
            bool contentIsStart = false;

            Dictionary<string, Dictionary<string, List<string>>> content = new Dictionary<string, Dictionary<string, List<string>>>();
            foreach (var direction in allDirections)
            {
                contentIsStart = false;
                Dictionary<string, List<string>> currentDirection = new Dictionary<string, List<string>>();
                foreach (var row in new XLWorkbook(direction).Worksheet(1).Rows())
                {
                    if (row.Cells().Any(c => c.GetString().Contains("Блок 1")))
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
                                        currentDirection[subject] = new List<string>();
                                    }
                                    else
                                    {
                                        codeIsSkiped = true;
                                    }
                                }
                                else
                                {
                                    currentDirection[subject].Add(cell.GetString());
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
