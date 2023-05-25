import { MongoDBUserModel } from "@/types";
import { Box, Table } from "@chakra-ui/react";
import TableRow from "../../TableRow";
import TableHeaderItem from "../../TableHeaderItem";
import { tableHeaders } from "@/consts";
import { useSelector } from "react-redux";
import { pageLimitSelector } from "@/store/selectors";
import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import UserDataTableHeader from "../UserDataTableHeader";

const UserDataTable = ({ isLoading, isError, usersData, totalUsers }: {
  isLoading: boolean, isError: boolean, usersData: MongoDBUserModel[] | [], totalUsers: number
}) => {

  const bgColor = useBackgroundColor();
  const _limit = useSelector(pageLimitSelector);

  return (
    <Box backgroundColor={bgColor} w='70%' m='0 auto' p='2em 0' borderRadius='15px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' >
      <UserDataTableHeader totalUsers={totalUsers} />
      <Box borderBottom='1px solid #3399ff30'></Box>
      {
        !isLoading && !isError &&
        <Table w='90%' m='3em auto 0'>
          <tbody>
            <tr>
              {tableHeaders.map((header: string) => header
                ?
                <TableHeaderItem key={`userData_table-${header}`} label={header} />
                :
                <th key={'table-header-empty-el'} />)}
            </tr>
            {
              usersData?.map((user: MongoDBUserModel, index: number) =>
                <TableRow user={user}
                  key={user.name + index}
                  haveBorder={index + 1 !== _limit} />)
            }
          </tbody>
        </Table>
      }
    </Box >
  )
};
export default UserDataTable;