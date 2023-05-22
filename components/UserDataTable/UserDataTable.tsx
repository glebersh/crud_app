import { MongoDBUserModel } from "@/types";
import { Box, Table, useColorModeValue } from "@chakra-ui/react";
import TableRow from "../TableRow/";
import TableHeaderItem from "../TableHeaderItem/";
import { tableHeaders } from "@/consts";

const UserDataTable = ({ isLoading, isError, usersData }: {
  isLoading: boolean, isError: boolean, usersData: MongoDBUserModel[] | []
}) => {
  const bgColor = useColorModeValue('white', '#1a1a1a');

  return (
    <Box backgroundColor={bgColor} w='70%' m='0 auto' p='2em' borderRadius='15px' >
      {!isLoading && !isError &&
        <>
          <Table>
            <tbody>
              <tr>
                {tableHeaders.map((header: string) => header
                  ?
                  <TableHeaderItem key={`userData_table-${header}`} label={header} />
                  :
                  <th key={'table-header-empty-el'} />)}
              </tr>
              {
                usersData.length ?
                  usersData?.map((user: MongoDBUserModel, index: number) =>
                    <TableRow user={user} key={user.name + index} />) : null
              }
            </tbody>
          </Table>
        </>
      }
    </Box >
  )
};
export default UserDataTable;