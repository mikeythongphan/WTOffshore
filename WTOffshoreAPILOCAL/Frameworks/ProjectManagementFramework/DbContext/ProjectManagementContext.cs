using Microsoft.EntityFrameworkCore;
using ProjectManagementFramework.DataObjects;
using WTOffshoreCore.DbContexts;

namespace RaoAppFramework.Modules.VisaInstant.DbContexts
{
    public class ProjectManagementContext : DbContextBase, IProjectManagementContext
    {

        public virtual DbSet<DrillWell> DrillWells { get; set; }
        public virtual DbSet<DrillWellComment> DrillWellComments { get; set; }
        public virtual DbSet<DropdownItem> DropdownItems { get; set; }
        public virtual DbSet<ItemType> ItemTypes { get; set; }
        public virtual DbSet<ProjectList> ProjectLists { get; set; }
        public virtual DbSet<ProjectListComment> ProjectListComments { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="settings"></param>
        public ProjectManagementContext(DbContextOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
