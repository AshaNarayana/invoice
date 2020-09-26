import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import {
  faThumbsUp,
  faThumbsDown,
  faImage,
  faMoneyCheckAlt,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  fontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
class APP extends Component {
  state = {
    isLoading: false,
    invoices: [
      {
        id: "1",
        Vendor: "hankock",
        Amount: "$18,000",
        Date: "08/21/2020",
        Invoice: "123",
      },
      {
        id: "2",
        Vendor: "hankock",
        Amount: "$18,000",
        Date: "08/21/2020",
        Invoice: "124",
      },
      {
        id: "3",
        Vendor: "hankock",
        Amount: "$18,000",
        Date: "08/21/2020",
        Invoice: "125",
      },
    ],
  };

  remove(id) {
    console.log(id);
    const upDatedInvoice = [...this.state.invoices].filter(
      (invoice) => invoice.id !== id
    );
    this.setState({ invoices: upDatedInvoice });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;
    let invoices = allInvoices.map((invoice) => {
      return (
        <tr key={invoice.id}>
          <td>{invoice.Vendor}</td>
          <td>{invoice.Amount}</td>
          <td>{invoice.Invoice}</td>
          <td>{invoice.Date}</td>
          <td>
            <Button
              className="btn btn-lg btn-success"
              onClick={() => this.remove(invoice.id)}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              Ok
            </Button>
          </td>
          <td>
            <Button
              className="btn btn-lg btn-danger"
              onClick={() => this.remove(invoice.id)}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
              Not Ok
            </Button>
          </td>
          <td>
            <Button
              className="btn btn-lg btn-info"
              onClick={() => this.remove(invoice.id)}
            >
              <FontAwesomeIcon icon={faMoneyCheckAlt} />
              50%
            </Button>
          </td>
          <td>
            <Button
              className="btn btn-lg btn-warning"
              onClick={() => this.remove(invoice.id)}
            >
              <FontAwesomeIcon icon={faSearchDollar} />
              ???
            </Button>
          </td>
          <td>
            <Button className="btn btn-lg btn-info">
              <FontAwesomeIcon icon={faImage} />
              ??Image
            </Button>
          </td>
        </tr>
      );
    });
    if (isLoading) return <div>Loading.....</div>;

    return (
      <div className="container border border-secondary rounded center">
        <div className="row">
          <div className="col-12">
            <h4> Pending Invoices- The Test Company</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th colSpan="4">Action</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.invoices.length === 0 ? (
                  <tr>
                    <td colSpan="9">All are cleared..!! </td>
                  </tr>
                ) : (
                  invoices
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default APP;
