import React from "react";
import styles from "./Dashboard.module.css"
import Navbar from "../layout/Navbar"
import logobanese from '../../components/img/logo banese.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoins, faEye, faCircleXmark ,faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
function Dashboard(){
    const cards = [
        { title: "Total de Transações (Este mês)", value: "5.320", icon: faUser, colorClass: styles.iconBlue },
        { title: "Transações suspeitas", value: "320 ", icon: faCoins, colorClass: styles.iconGreen },
        { title: "Total de Contas Investigadas", value: "38", icon: faChartSimple, colorClass: styles.iconPurple },
        { title: "Fraudes Confirmadas", value: "12", icon: faCircleXmark, colorClass: styles.iconRed },
      ];
      
    return(
        <div>
           <h1 className={styles.dashboard_title}>Dasboard</h1>
           <div className={styles.cards_grid}>
                {cards.map((card,index)=>(
                    <div key={index} className={styles.card}>
                        <div className={styles.card_content}>
                            <div className={styles.card_info}>
                                <p>{card.title}</p>
                                <p>{card.value}</p>
                            </div>
                            <div className={`${styles.card_icon} ${card.colorClass}`}>
                                <FontAwesomeIcon icon={card.icon} />
                            </div>
                        </div>
                    </div>
                ))}
           </div>
        </div>
        )
} export default Dashboard
































/* <div className={styles.sidebar}>
<img src={logobanese} className={styles.logo_banese}></img>
<Navbar/>
</div>
<div className={styles.metrics}>
<div>
    <h1>Visão Geral das Transações</h1>
</div>
<div className={styles.container_cards}>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
        <h3>5.320 transações </h3>
        <p>Total  de Transações
        (Este mês)</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faEye} className={styles.icon} />
        <h3>( 320 casos identificados) </h3>
        <p>Transações suspeitas</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h3>38 contas suspeitas em análise </h3>
        <p>Total de Contas Investigadas</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.icon} />
        <h3>12 Fraudes Confirmadas neste período</h3>
        <p>Fraudes Confirmadas</p>
    </div>
    <div className={styles.group_cards}>
        <FontAwesomeIcon icon={faCoins} className={styles.icon} />
        <h3>R$ 2.350.000,00 </h3>
        <p>Valor Total Movimentado</p>
    </div>
</div>
<div>
    <h1>Gráfico de Volume de Transações (Linha ou Barra)</h1>
</div>
<div>
    
</div>
</div>*/