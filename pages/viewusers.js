import Head from "next/head";
import CustomTable from "../components/CustomTable";

const viewusers = ({ result }) => {
  console.log(result.users);
  return (
    <>
      <Head>MG Banking - users</Head>

      <div class="banner__container" style={{ height: "60vh" }}>
        <div class="content tcontent" style={{ marginTop: "8rem" }}>
          <CustomTable
            title="Send Money Anytime, To Anyone For Free"
            data={result.users}
          />
        </div>
      </div>
    </>
  );
};

export default viewusers;

export async function getServerSideProps() {
  const res = await fetch(`https://basic-banking-system-eta.vercel.app/api/bankingInfo`);
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}
