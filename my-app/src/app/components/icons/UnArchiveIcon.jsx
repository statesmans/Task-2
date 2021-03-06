import s from '../Main.module.scss'

const UnArchiveIcon = (props) => {
  return (<svg className={s.UnArchive__icon} onClick={() => props.unArchiveNote(props.id)} viewBox="0 0 18 18" 
                version="1.1">
                <g transform="translate(-239.000000, -1529.000000)">
                    <g transform="translate(100.000000, 1428.000000)">
                        <g transform="translate(136.000000, 98.000000)">
                            <g>
                                <path d="M5,19 L19,19 L19,8 L5,8 L5,19 Z M12,10 L16,14 L13.45,14 L13.45,17 L10.54,17 L10.54,14 L8,14 L12,10 Z" id="🔹-Secondary-Color" fill="#D0D0D0"></path>
                                <path d="M20.54,5.23 L19.15,3.55 C18.88,3.21 18.47,3 18,3 L6,3 C5.53,3 5.12,3.21 4.84,3.55 L3.46,5.23 C3.17,5.57 3,6.02 3,6.5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,6.5 C21,6.02 20.83,5.57 20.54,5.23 Z M6.24,5 L17.76,5 L18.59,6 L5.42,6 L6.24,5 Z M19,19 L5,19 L5,8 L19,8 L19,19 Z M10.55,17 L13.45,17 L13.45,14 L16,14 L12,10 L8,14 L10.55,14 L10.55,17 Z" id="🔹-Primary-Color" fill="#1D1D1D"></path>
                            </g>
                        </g>
                    </g>
                </g>
          </svg>
          )
}

export default UnArchiveIcon