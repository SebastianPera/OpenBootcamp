import FilterContainer from "../containers/FilterContainer"


const FilterOptions = ({active, onClick, children}) =>  {

    return (
        <div className="filters">
            {/* Filter cotnainers */}
            <FilterContainer filter='SHOW_ALL' > ALL </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE' > ACTIVE </FilterContainer>
            <FilterContainer filter='show_COMPLETED' > COMPLETED </FilterContainer>
        </div>
    )
}


export default FilterOptions