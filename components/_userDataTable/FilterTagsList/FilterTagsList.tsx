import CustomTag from "@/UI/CustomTag";
import { RootState } from "@/store";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const FilterTagsList = () => {
  const filters = useSelector((state: RootState) => state.clientReducer.filters.mapFilters);

  return (
    <>
      <Flex gap='1em'>
        {
          Array.from(Object.keys(filters))
            .map((item: string) =>
              filters[item as keyof typeof filters]
                ?
                <CustomTag label={`${item.slice(0, 1).toUpperCase() + item.slice(1)}:
               ${String(filters[item as keyof typeof filters]).slice(0, 1).toUpperCase()
                  +
                  String(filters[item as keyof typeof filters]).slice(1)}`}
                  icon={<i className="bi bi-filter-right" />} /> : null)
        }
      </Flex >
    </>
  )
};
export default FilterTagsList;