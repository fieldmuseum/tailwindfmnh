import localFont from 'next/font/local';

export default function TablesPrimary(){
    return(
       <table className="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Start Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gilberto Santa Rosa</td>
                    <td>Janice Donovan</td>
                    <td>Davis Winston Jeffries</td>
                    <td>The Unspoken One</td>
                    <td>Sarah Allen</td>
                </tr>
                <tr>
                    <td>HR Manager</td>
                    <td>Marketing Coordinator</td>
                    <td>Exhibition Designer</td>
                    <td>Overlord</td>
                    <td>Exhibition Designer</td>
                </tr>
                <tr>
                    <td>10/21/2012</td>
                    <td>05/14/2008</td>
                    <td>07/05/1997</td>
                    <td>Time Immemorial</td>
                    <td>02/02/2008</td>
                </tr>
            </tbody>
       </table> 
    )
}