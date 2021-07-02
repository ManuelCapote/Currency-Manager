import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        position: "Symbol Position",
        type: "Code or Symbol",
        decimals: 'Show Decimals',
        format: "Number Format"
    }
];


class Currency_Manager_Settings extends React.Component {
  constructor(props) {
  super(props)
 }

    render() {
        return (
            <ExcelFile element={<button className='ui primary button'>Export Settings</button>}>
                <ExcelSheet data={dataSet1} name="Settings Name">
                    <ExcelColumn label={this.props.position} value="position"/>
                    <ExcelColumn label={this.props.type} value="type"/>
                    <ExcelColumn label={this.props.decimals} value="decimals"/>
                    <ExcelColumn label={this.props.format} value="format"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default Currency_Manager_Settings