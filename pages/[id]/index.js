import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const transection = ({ data, users }) => {
  const router = useRouter();

  const [recevierId, setReceiverId] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const [updateBalance, setUpdateBalance] = useState({
    balance: data.balance,
  });

  const [updateReceiverBalance, setUpdateReceiverBalance] = useState({
    balance: users[recevierId].balance,
  });

  const [tHistory, setTHistory] = useState({
    transectionAmount: null,
    senderName: "",
    receiverName: "",
    transectionId: "",
  });

  const [eAmount, setEAmount] = useState({
    enteredAmount: "",
  });

  let eAmountBalance = eAmount.enteredAmount;

  useEffect(() => {
    if (isSending) {
      updateBalanceOfCurrentUser();
      _updateRecevierBalance();
      createTransectionHistory();
      alert("Transection Successfull");

      router.replace("/transectionhistory");
    }
  });

  const createTransectionHistory = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/transection", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tHistory),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateBalanceOfCurrentUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/bankingInfo/${data._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateBalance),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const _updateRecevierBalance = async () => {
    let userId = users[recevierId]._id;
    try {
      const res = await fetch(
        `http://localhost:3000/api/bankingInfo/${userId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateReceiverBalance),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // handling amount sending
  const handleChange = (e) => {
    setEAmount({
      enteredAmount: e.target.value,
    });
  };

  // handling receiver in drop down
  const handleReceiver = (e) => {
    setReceiverId(e.target.value);
  };

  // handling when use click on submit
  const handleSending = (e) => {
    e.preventDefault();

    validate();

    let enteredAmount = Number(eAmountBalance);

    if (enteredAmount > 0 && enteredAmount <= data.balance) {
      setUpdateBalance({
        balance: data.balance - Number(eAmountBalance),
      });

      setUpdateReceiverBalance({
        balance: users[recevierId].balance + Number(eAmountBalance),
      });

      setTHistory({
        transectionId: data.userId,
        senderName: data.name,
        receiverName: users[recevierId].name,
        transectionAmount: eAmountBalance,
      });
    } else {
      setIsSending(false);
      alert("Please make sure you have sufficient balance");
    }
  };

  // validation
  const validate = () => {
    if (eAmountBalance != null) {
      setIsSending(true);
    } else {
      alert("Please enter amount");
    }
    return;
  };

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
            <select
              name="to"
              className="form__control"
              value={recevierId}
              onChange={handleReceiver}
              required
            >
              {recevierId != 0 && (
                <option value="0" disabled selected>
                  Select Receiver
                </option>
              )}

              {users.map((item, key) => {
                return (
                  <>
                    {data.userId != item.userId ? (
                      <option key={key} value={key}>
                        {item.name}
                      </option>
                    ) : null}
                  </>
                );
              })}
            </select>

            <input
              type="number"
              placeholder="Enter your amount"
              id="amount"
              name="balance"
              value={eAmountBalance}
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
  const res = await fetch(`http://localhost:3000/api/bankingInfo/${id}`);
  const { data } = await res.json();

  const res1 = await fetch("http://localhost:3000/api/bankingInfo/");
  const { users } = await res1.json();
  return {
    props: {
      data,
      users,
    },
  };
}
