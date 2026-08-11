
import { notice1, notice2 } from "@/assets/asset";

const notices = [
  {
    id: "noticeFirst",
    title: "Notice 1st Part",
    image: notice1,
  },
  {
    id: "noticeSecond",
    title: "Notice 2nd Part",
    image: notice2,
  },
];

const EttuNomb = () => {
  return (
    <div className='container mt-5'>
      <div id="notice" className='mt-3'>
        <h3 className='fs-16'>About <span className="malayalam-font fs-16">പെരുന്നാൾ</span></h3>
        <hr />
        <p className='malayalam-font fs-14' style={{
          'textIndent': '150px',
          'textAlign': 'justify',
          'overflowWrap': 'anywhere',
          'wordBreak': 'break-word',   
          'display': 'block'
        }}>
          തെക്കൻ മണർകാട് എന്നറിയപ്പെടുന്ന ആരാഴിപ്പള്ളിയിലെ എട്ടുനോമ്പാചരണവും  
          പെരുന്നാൾ ആഘോഷവും സെപ്റ്റംബർ മാസം 1 മുതൽ 8 വരെ തീയതികളിലാണ്. മുൻവർഷാത്തേക്കാൾ വിപുലമായ ക്രമീകരണങ്ങളാണ് ഈ വർഷത്തെ പെരുന്നാൾ ആചാരണത്തിന് ഒരുക്കീട്ടുള്ളത്. വിശുദ്ധ ദൈവമാതാവിന്റെ മദ്ധ്യസ്ഥതയ്‌ക്കു വിദൂര സ്ഥലങ്ങളിൽ 
          നിന്നും മറ്റും എത്തുന്നവർക്ക് ധ്യാനിക്കുവാനും പ്രാർത്ഥിക്കുവാനും സൗകര്യങ്ങൾ ക്രമീകരിച്ചിട്ടുണ്ട്. എട്ടു ദിവസവും യാമ പ്രാർത്ഥനകൾ, വിശുദ്ധ കുർബാന, മദ്ധ്യസ്ഥ പ്രാർത്ഥന, കൺവൻഷൻ, ഭക്തി നിർഭരമായ റാസ, സെമിത്തേരിയിൽ ധൂപപ്രാർത്ഥന, നേർച്ചവിളമ്പ്
          തുടങ്ങിയ പരിപാടികളിൽ പങ്കെടുക്കുവാൻ നാടിന്റെ നാനാതുറകളിൽ നിന്നും വന്നു ചേരുന്നു ആയിരങ്ങൾ പ്രാർത്ഥനാ മന്ത്രങ്ങൾ ഉരുവിട്ട് നിറമിഴികളോടെ ആത്മ നിർവൃതി പ്രാപിച്ചു മടങ്ങുന്നത് ഈ ദിവസങ്ങളിലെ പതിവ് കാഴ്ച്ചയാണ്. 
        </p>
        <p className='malayalam-font fs-14' style={{
          'textIndent': '150px',
          'textAlign': 'justify',
          'overflowWrap': 'anywhere',
          'wordBreak': 'break-word',   
          'display': 'block'
        }}>
          സെപ്റ്റംബർ 7,8 തീയതികളിൽ ദേവാലയത്തിന്റെ പ്രധാന പെരുന്നാൾ ഭക്തിനിർഭരമായും ആഘോഷപൂർവമായും അനുഷ്ടിക്കപ്പെടുന്നു.
        </p>
        <div className="vstack mb-3 gap-2">
          <div className="d-flex gap-2 flex-wrap">
            {notices.map((notice) => (
              <button
                key={notice.id}
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#88D44C",
                  color: "#fff",
                }}
                data-bs-toggle="modal"
                data-bs-target={`#${notice.id}`}
              >
                {notice.title}
                <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </button>
            ))}
          </div>
        </div>

        {/* Notice Modals */}
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="modal fade"
            id={notice.id}
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">
                    {notice.title}
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>

                <div className="modal-body text-center p-2">
                  <img
                    src={notice.image}
                    alt={notice.title}
                    className="img-fluid w-100"
                    // style={{
                    //   maxHeight: "85vh",
                    //   objectFit: "cover",
                    // }}
                  />
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EttuNomb;