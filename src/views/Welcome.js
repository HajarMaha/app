import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableCon from '../components/table-page/Table';
import PaginatedTable from '../components/table-page/TablePagi';
import TablePagTry from '../components/table-page/TablePagTry';
 
class Welcome extends Component {
    render() {
        return (
            <div>
                {/* <Header></Header> */}
                {/* <Menu></Menu> */}
                {/* <TableCon></TableCon> */}
                {/* <PaginatedTable></PaginatedTable> */}
                <TablePagTry></TablePagTry>
            </div>
        );
    }
}
 
export default Welcome;