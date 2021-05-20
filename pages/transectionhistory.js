import Head from "next/head";
import CustomTable from "../components/CustomTable";

const transectionHistory = ({ result }) => {
  return (
    <>
      <Head>MG Banking - transectionHistory</Head>

      <div className="banner__container" style={{ height: "60vh" }}>
        <div className="content tcontent" style={{ marginTop: "8rem" }}>
          <CustomTable
            title="Transection History"
            data={result.transections}
            forTransfer={true}
          />
        </div>
      </div>
    </>
  );
};

export default transectionHistory;

export async function getServerSideProps() {
  const res = await fetch(
    `https://basic-banking-system-six.vercel.app/api/transection`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}
