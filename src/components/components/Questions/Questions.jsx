import React from "react";
import {
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem,
  MDBIcon,
  MDBRipple
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import { questionsData } from "./data";

import "./Questions.css";

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 1
    }
  })
};

export const Questions = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <MDBContainer fluid className="questions">
        <h3 className="pt-5 fw-bolder text-center">Часто задаваемые вопросы</h3>
        <motion.div variants={textAnimation} custom={2}>
          <MDBAccordion
            flush
            initialActive={1}
            className="p-5 questions__wrapper">
            {questionsData.map(question => (
              <MDBRipple key={question.id} className="w-100">
                <MDBAccordionItem
                  collapseId={question.id}
                  className="questions__text"
                  headerTitle={
                    <>
                      <MDBIcon fas icon="tint" className="questions__icon" />
                      {question.title}
                    </>
                  }>
                  {question.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </MDBAccordionItem>
              </MDBRipple>
            ))}
          </MDBAccordion>
        </motion.div>
      </MDBContainer>
    </motion.div>
  );
};

// export const Questions = () => {
//   return (
//     <div>
//       <MDBContainer fluid className="questions">
//         <h3 className="pt-5 fw-bolder text-center">Часто задаваемые вопросы</h3>
//         <MDBAccordion
//           flush
//           initialActive={1}
//           className="p-5 questions__wrapper">
//           <MDBRipple className="w-100">
//             <MDBAccordionItem
//               collapseId={1}
//               className="questions__text"
//               headerTitle={
//                 <>
//                   <MDBIcon fas icon="tint" className="questions__icon" /> &nbsp;
//                   В каких отраслях вы работаете?
//                 </>
//               }>
//               <p>- Гостиничные комплексы и санитарно-курортные комплексы.</p>
//               <p>- Агросекторы.</p>
//               <p>- Объекты ЖКХ.</p>
//               <p>- Котельные и парогенераторные установки.</p>
//               <p>- Вахтовые и коттеджные поселки.</p>
//               <p>- Предприятия пищевой и фармацевтической промышленности.</p>
//               <p>
//                 - Предприятия газовой, нефтеняной, горно-металлургической
//                 промышленности.
//               </p>
//               <p>
//                 - Воинские части, аванпосты, базы и временные базы,
//                 подразделения МЧС и зоны стихийных бедствий.
//               </p>
//             </MDBAccordionItem>
//           </MDBRipple>
//           <MDBRipple className="w-100">
//             <MDBAccordionItem
//               collapseId={2}
//               className="questions__text"
//               headerTitle={
//                 <>
//                   <MDBIcon fas icon="tint" className="questions__icon" /> &nbsp;
//                   Для чего предназначены ваши станции?
//                 </>
//               }>
//               <p>
//                 - Наши станции очистки воды предназначены для приема и очистки
//                 природных подземных, надземных вод разной степени загрязненности
//                 до норм качества питьевой воды или иных требований.
//               </p>
//             </MDBAccordionItem>
//           </MDBRipple>
//           <MDBRipple className="w-100">
//             <MDBAccordionItem
//               collapseId={3}
//               className="questions__text"
//               headerTitle={
//                 <>
//                   <MDBIcon fas icon="tint" className="questions__icon" /> &nbsp;
//                   В чем основные отличия двух вариантов исполнения?
//                 </>
//               }>
//               <p>
//                 - Отличительной особенностью рамно-модульных станций является
//                 отсутствие блочно-модульного здания, а сами установки
//                 смонтированы на раме с возможностью модульной сборки. <br />
//                 Такие станции монтируются в готовом помещении, с подключением к
//                 коллектору исходной, очищенной и дренажной воды, а также к точке
//                 электропитания.
//               </p>
//               <p>
//                 - Для блочно-модульных станций не требуется строительство
//                 специальных сооружений, что существенно сокращает расходы на
//                 проектно-строительные работы при возведении водоочистных
//                 комплексов. <br />
//                 Станции собираются на базе металлоконструкций с сэндвич-панелями
//                 по размеру стандартных транспортабельных блоков. Исполнение
//                 станций может быть адаптировано для эксплуатации, как в жарком
//                 климате, так и в условиях крайнего севера. Все контейнерные
//                 станции соответствуют нормам пожаробезопасности и сделаны в
//                 антивандальном исполнении. Так же могут быть дополнены отдельным
//                 контейнером с системой хранения и раздачи чистой воды.
//               </p>
//             </MDBAccordionItem>
//           </MDBRipple>
//         </MDBAccordion>
//       </MDBContainer>
//     </div>
//   );
// };
