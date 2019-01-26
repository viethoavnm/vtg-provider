import React from 'react';
import api from 'utils/api';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'intl';
import { Table, Button, Input } from 'antd';

const PAGE_SIZE_DEFAULT = 10;

export default class Management extends React.Component {

  state = { content: [], number: 1, size: PAGE_SIZE_DEFAULT, fetching: false, query: {} }

  columns = getColumns();

  fetch = (page = 0, size = this.state.size, query = this.state.query) => {
    this.setState({ fetching: true })
    api.getMyHotel({
      page,
      size,
      ...query
    })
      .then((data) => {
        this.setState({ ...data, fetching: false })
      })
  }

  onSearch = (key) => {
    this.fetch(0, this.state.size, { key })
  }

  showSizeChanger = (current, pageSize) => {
    this.fetch(current - 1, pageSize);
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { content, fetching, number, size, totalElements } = this.state;
    return (
      <div className="container">
        <div className="tbl__title">
          <FormattedMessage id="STAY_LIST" />
        </div>
        <div className="tbl__toolbar">
          <Link to="/hotel">
            <Button>
              <FormattedMessage id="ADD_STAY" />
            </Button>
          </Link>
          <Input.Search onSearch={this.onSearch} />
        </div>
        <Table
          rowKey="id"
          loading={fetching}
          columns={this.columns}
          dataSource={content}
          pagination={{
            showSizeChanger: true,
            current: number + 1,
            pageSize: size,
            total: totalElements,
            onChange: this.showSizeChanger,
            onShowSizeChange: this.showSizeChanger
          }}
        />
      </div>)
  }
}

const getColumns = () => {
  return [
    {
      title: <FormattedMessage id="STAY_CODE" />,
      dataIndex: 'id'
    },
    {
      title: <FormattedMessage id="STAY_NAME" />,
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="STAY_TYPE" />,
      dataIndex: 'hotelType'
    },
    {
      title: <FormattedMessage id="STAY_STATE" />,
      dataIndex: 'state',
    },
    {
      title: <FormattedMessage id="STAY_STATUS" />,
      dataIndex: 'status'
    },
    {
      title: <FormattedMessage id="STAY_DETAIL" />,
      render: ({ id }) => (
        <Link to={`/hotel/${id}`}>
          <FormattedMessage id="VIEW_DETAIL" />
        </Link>)
    }
  ];
}