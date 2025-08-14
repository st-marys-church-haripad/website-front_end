import { notice } from "@/assets/asset";
import { useState } from "react";

const EttuNomb = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className='container mt-5'>
        <div id="notice" className='mt-3'>
          <h3 className='fs-16'>About perunnal</h3>
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
          <div className="vstack mb-3">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#noticeModal">
              Notice <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <div class="modal fade" id="noticeModal" tabindex="-1" aria-labelledby="noticeModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={ notice } 
                      className="img-fluid"
                      onLoad={() => setImgLoaded(true)}
                      style={{ 
                        filter: imgLoaded ? 'blur(0px)' : 'blur(8px)',
                        transition: 'filter 0.6s ease',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EttuNomb