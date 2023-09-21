export type FilterOption = 'all' | 'active' | 'completed';

type Props = {
  statusFilter: FilterOption,
  setStatusFilter: (option: FilterOption) => void,
  titleFilter: string,
  setTitleFilter: (part: string) => void

};

export const TodoFilter: React.FC<Props> = (
  {
    statusFilter,
    setStatusFilter,
    titleFilter,
    setTitleFilter,
  },
) => (

  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as FilterOption);
          }}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        value={titleFilter}
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        onChange={e => setTitleFilter(e.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {
        titleFilter
        && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setTitleFilter('')}
            />
          </span>

        )
      }
    </p>
  </form>
);
