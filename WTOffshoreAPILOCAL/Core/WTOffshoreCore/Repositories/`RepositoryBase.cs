using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using WTOffshoreCore.DataObjects;

namespace WTOffshoreCore.Repositories
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="TPK"></typeparam>
    public abstract class RepositoryBase<T> : IRepositoryBase<T>
        where T : DataObjectBase
    {

        private readonly IUnitOfWork _uow;

        /// <summary>
        /// Create a new instance of repository
        /// </summary>
        /// <param name="context">Associated Unit Of Work</param>
        protected RepositoryBase(IUnitOfWork context)
        {
            _uow = context ?? throw new ArgumentNullException(nameof(context));
        }

        /// <summary>
        /// 
        /// </summary>
        public IUnitOfWork UOW => _uow;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="e"></param>
        public virtual T? Insert(T? e)
        {
            if (e == null) return null;
            var result = GetSet().Add(e);
            return result.Entity;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entities"></param>
        public virtual void InsertMany(List<T> entities)
        {
            entities.ForEach(x => Insert(x));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="e"></param>
        public virtual void Update(T? e)
        {
            if (e == null) return;
            _uow.SetModified(e);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        public virtual void Delete(int id)
        {
            var obj = Get(id);
            Delete(obj);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="e"></param>
        public virtual void Delete(T? e)
        {
            if (e == null) return;
            _uow.SetAttach(e);
            GetSet().Remove(e);
        }

        /// <summary>
        /// 
        /// </summary>
        public virtual void Clear()
        {
            if (!GetSet().Any()) return;
            GetSet().RemoveRange(GetSet());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="e"></param>
        public virtual void TrackItem(T? e)
        {
            if (e == null) return;
            _uow.SetAttach(e);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual T Get(int id)
        {
            return GetSet().Find(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public virtual IQueryable<T> GetAll()
        {
            return GetSet();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TKProperty"></typeparam>
        /// <param name="pageIndex"></param>
        /// <param name="pageCount"></param>
        /// <param name="orderByExpression"></param>
        /// <param name="ascending"></param>
        /// <returns></returns>
        public virtual IQueryable<T> GetPaged<TKProperty>(int pageIndex,
            int pageCount,
            Expression<Func<T, bool>>? filter,
            Expression<Func<T, TKProperty>> orderByExpression,
            bool ascending)
        {
            var set = filter != null ? GetSet().Where(filter) : GetSet();
            return ascending
                ? set.OrderBy(orderByExpression)
                    .Skip(pageCount * pageIndex)
                    .Take(pageCount)
                : set.OrderByDescending(orderByExpression)
                    .Skip(pageCount * pageIndex)
                    .Take(pageCount);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public virtual IQueryable<T> GetFiltered(Expression<Func<T, bool>> filter)
        {
            return GetSet().Where(filter);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public virtual T? FirstOrDefault(Expression<Func<T, bool>>? filter = null) =>
            filter != null ? GetSet().FirstOrDefault(filter) : GetSet().FirstOrDefault();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public virtual T First(Expression<Func<T, bool>>? filter = null) =>
            filter != null ? GetSet().First(filter) : GetSet().First();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="persisted"></param>
        /// <param name="current"></param>
        public virtual void Merge(T persisted, T current)
        {
            _uow.ApplyCurrentValues(persisted, current);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TAny"></typeparam>
        /// <param name="sql"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        public IQueryable<TAny> ExecSql<TAny>(string sql, object[]? parameters = null)
            where TAny : class
        {
            return _uow.ExecSql<TAny>(sql, parameters);
        }

        private bool _disposed;

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            if (_disposed) return;
            _disposed = true;
        }

        /// <summary>
        /// 
        /// </summary>
        ~RepositoryBase()
        {
            Dispose(false);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public DbSet<T> GetSet()
        {
            return _uow.CreateSet<T>();
        }

    }
}
