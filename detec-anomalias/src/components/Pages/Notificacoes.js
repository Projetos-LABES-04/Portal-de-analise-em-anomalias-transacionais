import {useState} from "react"
import styles from "./Notificacoes.module.css"
import Sidebar from "../layout/Sidebar"
import {
    Bell,
    AlertTriangle,
    RefreshCw,
    Rocket,
    Filter,
    Search,
    ChevronDown,
    CheckCircle2,
    Clock,
    XCircle,
    Eye
  } from 'lucide-react';
import { Menu } from 'lucide-react';
function Notificacoes(){

    const mockData = [
        {
            id:"1",
            type:'suspicious', //Significado: Algo suspeito foi detectado.
            title: 'Transação de alto valor detectada',
            description: 'Transferência acima do padrão',
            timestamp:'2024-03-15T14:30:00',
            severity: "alto",
            status:"novo"
        },
        {
            id: '2',
            type:'pattern', //Significado: Um padrão incomum foi identificado.
            title: 'Múltiplas transações pequenas',
            description: 'Padrão de fragmentação detectado nas últimas 2 horas',
            timestamp: '2024-03-15T13:45:00',
            severity: 'medio',
            status: 'analise'
        },
        {
            id: '3',
            type:'account', //Significado: Algo relacionado à conta do usuário foi detectado.
            title: 'Nova conta com movimentação suspeita',
            description: 'Alto volume de transações em conta recém-criada',
            timestamp: '2024-03-15T12:15:00',
            severity: 'alto',
            status: 'novo'
        },
        {
            id: '4',
            type:'suspicious', //Significado: Algo suspeito foi detectado.
            title: 'Tentativa de acesso bloqueada',
            description: 'Múltiplas tentativas de login de IP suspeito',
            timestamp: '2024-03-15T11:30:00',
            severity: 'baixo',
            status: 'resolvido'
        }
    ]

    const getTypeIcon = (type)=>{
        switch (type){
            case 'suspicious':
                return <AlertTriangle className={styles.icon_alert} />;
            case 'pattern':
                return <RefreshCw className={styles.icon_pattern} />;
            case 'account':
                return <Rocket className={styles.icon_account} />;
            default :
                return null
        }
    }

    const getSeverityColor = (severity)=>{
        switch (severity){
            case 'baixo':
                return styles.severity_color_green
            case 'medio':
                return styles.severity_color_yellow
            case 'alto':
                return styles.severity_color_red
        }
    }

    const [sidebarOpen,setSidebarOpen] = useState(false)

    return(
        <div className={styles.app_container}>
            <button className={styles.mobile_menu_button} onClick={()=> setSidebarOpen(!sidebarOpen)}>
                <Menu/>
            </button>
            <div className={`${styles.overlay} ${sidebarOpen ? styles.open : ''}`}  onClick={() => setSidebarOpen(false)}/>
            <div className={`${styles.sidebar} ${sidebarOpen ?styles.open : ''}`}>
                <Sidebar/>
            </div>
            <div className={styles.main_content}>
               <div className={styles.container_not}>
                <header className={styles.header}>
                    <div className={styles.header_content}>
                        <h1 className={styles.header_title}>Central de Alertas</h1>
                        <div className={styles.header_actions}>
                            <button className={styles.filter_button}>
                                <Filter style={{ width: '16px', height: '16px' }} />
                                Filtros
                                <ChevronDown style={{ width: '16px', height: '16px' }} />
                            </button>
                            <div className={styles.search_container}>
                                <Search className={styles.search_icon} style={{ width: '20px', height: '20px' }} />
                                <input
                                    type="text"
                                    placeholder="Buscar alertas..."
                                    className={styles.searh_input}
                                />
                            </div>
                        </div>
                    </div>
                </header>
               </div>
            </div>
        </div>
    )
} export default Notificacoes