using Microsoft.EntityFrameworkCore;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.DataObjects;
using WTOffshoreCore.DbContexts;

namespace RaoAppFramework.Modules.VisaInstant.DbContexts
{
    public interface IProjectManagementContext : IDbContextBase
    {
        DbSet<DrillWell> DrillWells { get; set; }
        DbSet<DrillWellComment> DrillWellComments { get; set; }
        DbSet<DropdownItem> DropdownItems { get; set; }
        DbSet<ItemType> ItemTypes { get; set; }
        DbSet<ProjectList> ProjectLists { get; set; }
        DbSet<ProjectListComment> ProjectListComments { get; set; }
    }
}
