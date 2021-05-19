import { useState } from "react";

const transection = ({ data, users }) => {
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    balance: "",
    senderName: "",
    receiverName: "",
    transectionId: "",
  });
  let formBalance = parseInt(form.balance);
  let currentUserBalance = data.balance;
  let receiverBalance = 0;

  const createTransectionHistory = async () => {
    try {
      const res = await fetch("https://basic-banking-system-eta.vercel.app/api/transection", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {}
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSending = (e) => {
    e.preventDefault();
    validate();

    if (formBalance > 0 && formBalance < data.balance) {
      currentUserBalance = currentUserBalance - parseInt(form.balance);
    }
    console.log(currentUserBalance);

    setIsSending(true);
  };

  const validate = () => {
    console.log(formBalance);
    if (!form.balance) {
      alert("Please enter amount");
    }

    if (formBalance > data.balance) {
      alert("Insufficent Balance");
    }
  };
  // console.log(users);
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

              {users.map((item, key) => {
                return (
                  <>
                    {data.userId != item.userId && (
                      <option value={item.userId}>{item.name}</option>
                    )}
                  </>
                );
              })}
            </select>

            <input
              type="number"
              placeholder="Enter your amount"
              id="amount"
              name="balance"
              value={form.balance}
              onChange={handleChange}
              required
            />
          </div>
          <div className="transectionField">
            <button
              onClick={handleSending}
              type="submit"
              name="submit"
              id="btn"
            >
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
  const res = await fetch(`https://basic-banking-system-eta.vercel.app/api/bankingInfo/${id}`);
  const { data } = await res.json();

  const res1 = await fetch("https://basic-banking-system-eta.vercel.app/api/bankingInfo/");
  const { users } = await res1.json();
  return {
    props: {
      data,
      users,
    },
  };
}
