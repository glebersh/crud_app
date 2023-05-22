import { Input, InputGroup } from "@chakra-ui/react";

type ChangeHandlerType = ((val: string) => void) | ((val: string) => { payload: string; type: "clientReducer/setSearchValue"; });

const CustomSearchbar = ({ changeHandler }: { changeHandler: ChangeHandlerType }) => {

  return (
    <InputGroup borderRadius='.35em' display='flex' alignItems='center'>
      <Input
        type='search'
        onChange={e => changeHandler(e.target.value)}
        placeholder='Search...' />
    </InputGroup>
  )
};

export default CustomSearchbar;