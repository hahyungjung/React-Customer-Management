import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.user_name}</TableCell>
                <TableCell>{this.props.first_name}</TableCell>
                <TableCell>{this.props.last_name}</TableCell>
                <TableCell>{this.props.email}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.phone_number}</TableCell>
            </TableRow>
        )
    }
}


export default Customer;