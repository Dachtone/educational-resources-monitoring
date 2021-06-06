using System.IO;
using System.Linq;
using ERM.Backend.Data.Helpers;
using System.Collections.Generic;
using ERM.Backend.Entities;

namespace ERM.Backend.Handler.Files
{
    public class DirectionInfo
    {
        public IEnumerable<Direction> GetAllDirections()
        {
            IEnumerable<Direction> directions = new DirectoryInfo(Constans.FilesPath).GetFiles().Select(o =>
            {
                var splitedName = o.Name.Split(new char[] { '-', '.' });
                return new Direction { Name = splitedName[1], Degree = splitedName[0].ToLower(), Code = "09.03.02" };
            });
            return directions;

        }
        public IEnumerable<string> GetAllFullNames()
        {
            return Directory.GetFiles(Constans.FilesPath);
        }
    }
}
