import { markdownify } from "@lib/utils/textConverter";

function Adm({ data }) {
  const { frontmatter } = data;
  const { title, adms } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")} 
         <div className="section row  -mt-6">
          {adms.map((adm, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="adm-head relative">
                  {markdownify(adm.title, "h4")}
                </div>
                {markdownify(adm.answer, "p", "adm-body mt-4")}
              </div>
            </div>
          ))}
        </div> 
        <h1>
            it seems that it will be done with in half and hour
        </h1>
      </div>
    </section>
  );
}

export default Adm;
