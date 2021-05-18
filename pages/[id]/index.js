const transection = ({ data }) => {
  console.log(data);
  return (
    <div className="banner__container" style={{ height: "60vh" }}>
      <div className="content" style={{ marginTop: "8rem" }}>
        <h1 style={{ marginBottom: "3rem" }}>Money Transfer Service</h1>

        <div className="table__container">
          <table>
            <tr>
              <th className="thead">Id</th>
              <th className="thead">Name</th>
              <th className="thead">Email</th>
              <th className="thead">Current Balance</th>
            </tr>

            <tr>
              <td>{data.userId}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.balance}</td>
            </tr>
          </table>
        </div>

        <form method="post" name="tamount">
          <div className="container">
            <select name="to" className="form__control" required>
              <option value="" disabled selected>
                Select Receiver
              </option>

              <option value=""></option>
            </select>

            <input
              type="number"
              placeholder="Enter your amount"
              id="amount"
              name="amount"
              min="0"
              required
            />
          </div>
          <div className="transectionField">
            <button type="submit" name="submit" id="btn">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default transection;

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/bankingInfo/${id}`);
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}
