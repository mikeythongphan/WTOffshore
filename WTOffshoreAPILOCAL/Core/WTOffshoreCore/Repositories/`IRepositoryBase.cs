using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace WTOffshoreCore.Repositories
{

    /// <summary>
    /// 
    /// </summary>
    public interface IRepositoryBase
    {
        // For DI Container
    }

    /// <inheritdoc>
    ///     <cref></cref>
    /// </inheritdoc>
    /// <summary>
    /// Base interface to implement DbContextBase Pattern
    /// </summary>
    /// <typeparam name="T">Type of entity for this repository </typeparam>
    public interface IRepositoryBase<T> : IRepositoryBase, IDisposable
        where T : class
    {
        /// <summary>
        /// Get the unit of work in this repository
        /// </summary>
        IUnitOfWork UOW { get; }

        /// <summary>
        /// Add item into repository
        /// </summary>
        /// <param name="item">Item to add to repository</param>
        T? Insert(T? item);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entities"></param>
        void InsertMany(List<T> entities);

        /// <summary>
        /// Set item as modified
        /// </summary>
        /// <param name="item">Item to modify</param>
        void Update(T? item);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        void Delete(int id);

        /// <summary>
        /// Delete item 
        /// </summary>
        /// <param name="item">Item to delete</param>
        void Delete(T? item);

        /// <summary>
        /// 
        /// </summary>
        void Clear();

        /// <summary>
        ///Track entity into this repository, really in UnitOfWork. 
        ///In EF this can be done with SetAttach and with Update in NH
        /// </summary>
        /// <param name="e">Item to attach</param>
        void TrackItem(T? e);

        /// <summary>
        /// Sets modified entity into the repository. 
        /// When calling Commit() method in UnitOfWork 
        /// these changes will be saved into the storage
        /// </summary>
        /// <param name="persisted">The persisted item</param>
        /// <param name="current">The current item</param>
        void Merge(T persisted, T current);

        /// <summary>
        /// Get element by entity key
        /// </summary>
        /// <param name="id">Entity key value</param>
        /// <returns></returns>
        T Get(int id);

        /// <summary>
        /// Get all elements of type T in repository
        /// </summary>
        /// <returns>List of selected elements</returns>
        IQueryable<T> GetAll();

        /// <summary>
        /// Get all elements of type T in repository
        /// </summary>
        /// <param name="pageIndex">Page index</param>
        /// <param name="pageCount">Number of elements in each page</param>
        /// <param name="orderByExpression">Order by expression for this query</param>
        /// <param name="ascending">Specify if order is ascending</param>
        /// <returns>List of selected elements</returns>
        IQueryable<T> GetPaged<TKProperty>(int pageIndex,
            int pageCount, Expression<Func<T, bool>>? filter,
            Expression<Func<T, TKProperty>> orderByExpression,
            bool ascending);

        /// <summary>
        /// Get  elements of type T in repository
        /// </summary>
        /// <param name="filter">Filter that each element do match</param>
        /// <returns>List of selected elements</returns>
        IQueryable<T> GetFiltered(Expression<Func<T, bool>> filter);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        T? FirstOrDefault(Expression<Func<T, bool>>? filter = null);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        T First(Expression<Func<T, bool>>? filter);

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        DbSet<T> GetSet();

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TAny"></typeparam>
        /// <param name="sql"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        IQueryable<TAny> ExecSql<TAny>(string sql, object[]? parameters = null)
            where TAny : class;
    }
}
