import { Box, Input, InputGroup } from "@chakra-ui/react";

type ChangeHandlerType = ((val: string) => void) | ((val: string) => { payload: string; type: "clientReducer/setSearchValue"; });

const CustomSearchbar = ({ changeHandler }: { changeHandler: ChangeHandlerType }) => {

  return (
    <InputGroup borderRadius='.35em' display='flex' alignItems='center' justifyContent='flex-end'>
      <Input
        type='search'
        id='custom_searchbar'
        onChange={e => changeHandler(e.target.value)}
        placeholder='Search...'
        focusBorderColor="accentOne"
        pr='3em' />
      <Box position='absolute' mr='1em' fontSize='1.25em' color='#aaa'>
        <i className="bi bi-search"></i>
      </Box>
    </InputGroup>
  )
};

export default CustomSearchbar;