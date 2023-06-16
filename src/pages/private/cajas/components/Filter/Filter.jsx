import { Container, FilterGroup, FilterTitle, Label, Radio } from "./styled";

const Filter = ({ filter, setFilter }) => {
  const handleChangeRadio = (e) => setFilter(e.target.value);

  const filterType = {
    ALL: "ALL",
    UYU: "UYU",
    USD: "USD",
    R$: "R$",
  };

  const handleSelected = (path) => {
    return path === filter ? "underline" : "none";
  };

  return (
    <>
      <Container>
        <FilterTitle>Filtros</FilterTitle>
        <div style={{ display: "flex" }}>
          <FilterGroup>
            <Label
              selected={handleSelected(filterType.ALL)}
              htmlFor={filterType.ALL}
            >
              ALL
            </Label>
            <Radio
              type="radio"
              name="moneda"
              id={filterType.ALL}
              value={filterType.ALL}
              onChange={handleChangeRadio}
              checked={filter === filterType.ALL}
            />
          </FilterGroup>

          <FilterGroup>
            <Label
              selected={handleSelected(filterType.UYU)}
              htmlFor={filterType.UYU}
            >
              UYU
            </Label>
            <Radio
              type="radio"
              name="moneda"
              id={filterType.UYU}
              value={filterType.UYU}
              onChange={handleChangeRadio}
              checked={filter === filterType.UYU}
            />
          </FilterGroup>

          <FilterGroup>
            <Label
              selected={handleSelected(filterType.USD)}
              htmlFor={filterType.USD}
            >
              USD
            </Label>
            <Radio
              type="radio"
              name="moneda"
              id={filterType.USD}
              value={filterType.USD}
              onChange={handleChangeRadio}
              checked={filter === filterType.USD}
            />
          </FilterGroup>

          <FilterGroup>
            <Label
              selected={handleSelected(filterType.R$)}
              htmlFor={filterType.R$}
            >
              R$
            </Label>
            <Radio
              type="radio"
              name="moneda"
              id={filterType.R$}
              value={filterType.R$}
              onChange={handleChangeRadio}
              checked={filter === filterType.R$}
            />
          </FilterGroup>
        </div>
      </Container>
    </>
  );
};

export default Filter;
