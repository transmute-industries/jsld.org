import MaterialTable, { MTableToolbar } from "material-table";
import React from "react";
import PropTypes from "prop-types";

class DataTable extends React.Component {
  render() {
    const { title, data, columns, detailPanel } = this.props;
    return (
      <MaterialTable
        components={{
          Toolbar: props => (
            <div style={{ backgroundColor: "#e8eaf5" }}>
              <MTableToolbar {...props} />
            </div>
          )
        }}
        title={title}
        data={data}
        columns={columns}
        options={{
          // search is fale becuase of prop types warning
          search: false,
          exportButton: true,
          pageSize: 5
        }}
        detailPanel={detailPanel}
      />
    );
  }
}

DataTable.propTypes = {
  title: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  columns: PropTypes.any.isRequired,
  detailPanel: PropTypes.any
};

export default DataTable;
