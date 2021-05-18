const CustomTable = ({ forTransfer, title, data }) => {
  return (
    <>
      <h1 style={{ marginBottom: "5rem" }}>{title}</h1>
      <div className="table__container">
        <table>
          <tr>
            <th className="thead">Id</th>
            <th className="thead">{forTransfer ? "Sender" : "Name"}</th>
            <th className="thead">{forTransfer ? "Receiver" : "Email"}</th>
            <th className="thead">
              {forTransfer ? "Amount Transferd" : "Current Balance"}
            </th>
            {forTransfer ? null : <th className="thead"></th>}
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{forTransfer ? item.sendName : item.name}</td>
                <td>{forTransfer ? item.receiverName : item.email}</td>
                <td>{forTransfer ? item.transferAmount : item.balance}</td>
                {forTransfer ? null : (
                  <td>
                    <a className="transferBtn" href={`/${item._id}`}>
                      Transfer
                    </a>
                  </td>
                )}
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default CustomTable;
