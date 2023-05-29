import CustomTag from "@/UI/CustomTag";
import { toFirstLetterCapital } from "@/lib/capitalFirstLetter";
import { mapFiltersSelector } from "@/store/selectors";
import { Flex } from "@chakra-ui/react";
import { BsFilterRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const FilterTagsList = () => {
  const filters = useSelector(mapFiltersSelector);

  return (
    <>
      <Flex gap='1em'>
        {
          Array.from(Object.keys(filters))
            .map((item: string) =>
              filters[item as keyof typeof filters]
                ?
                <CustomTag key={item}
                  label={`${toFirstLetterCapital(item)}:
               ${toFirstLetterCapital(String(filters[item as keyof typeof filters]))}`}
                  icon={<BsFilterRight />} />
                :
                null)
        }
      </Flex >
    </>
  )
};
export default FilterTagsList;