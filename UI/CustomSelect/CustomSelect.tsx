import { Select } from "@chakra-ui/react";
import { SelectOptionType } from "@/types";

const CustomSelect = ({ options, withDefault, changeHandler, _pageLimit }:
  {
    options: SelectOptionType[], withDefault?: boolean, defValue?: string | number,
    changeHandler?: (val: string) => void,
    _pageLimit?: string | number
  }) => {


  return (
    <>
      <Select value={_pageLimit}
        focusBorderColor="accentOne"
        onChange={e => {
          const targetEl = e.target as HTMLSelectElement;
          changeHandler !== undefined ? changeHandler(targetEl.value) : null;
        }}>
        {withDefault && <option value='default'>Choose an option</option>}
        {
          options.map((option: SelectOptionType) =>
            <option
              key={`select_${option.title}: ${option.value}`}
              value={option.value}>
              {option.title}
            </option>)
        }
      </Select>
    </>
  )
};
export default CustomSelect;