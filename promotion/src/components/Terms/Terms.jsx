import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Terms.module.css'
import { useTranslation } from 'react-i18next'

function Terms(props) {
  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')

  return (
    <>
    <Header></Header>
    <div className={`${style.content} ${style.privacy} ${style.body}`}>
    <section>
      <div className={style.inner}>
        <h2>{t('terms')}</h2>
        <p>(Last updated on November 1, 2020)</p>
        <ul>
          <li>
            <h3>제1장 총칙</h3>
            <ul>
              <li>
                <h4>제1조 (목적)</h4>
                <p>본 약관은 주식회사 파수(이하 "회사")에서 제공하는 유무선 인터넷 서비스인 Fireside 서비스(이하 "서비스") 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
              </li>
              <li>
                <h4>제2조 (용어의 정의)</h4>
                <p>본 약관에서 사용되는 용어의 정의는 다음과 같습니다.</p>
                <ul>
                  <li>
                    <p>서비스 : 회원이 컴퓨터, 휴대용 단말기 등 각종 유·무선 기기 또는 프로그램을 통하여 이용할 수 있도록 회사가 제공하는 모든 서비스를 말합니다.</p>
                  </li>
                  <li>
                    <p>회원 : 본 서비스에 접속하여 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</p>
                  </li>
                  <li>
                    <p>사이트 : 서비스를 제공하는 Web 기반 유·무선 홈페이지(http://*.firesidedemo.com)를 비롯한 서비스를 말합니다.</p>
                  </li>
                  <li>
                    <p>애플리케이션 : 서비스를 제공하는 휴대용 단말기에 설치되는 프로그램을 말합니다.</p>
                  </li>
                  <li>
                    <p>아이디(ID) : 회원의 식별과 회원의 서비스를 위하여 회원이 입력한 e-mail(전자메일) 주소를 의미합니다.</p>
                  </li>
                  <li>
                    <p>비밀번호(PASSWORD) : 회원을 식별하는 아이디와 일치하는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한 8자리 이상의 문자 또는 숫자, 특수문자 조합을 의미합니다.</p>
                  </li>
                  <li>
                    <p>게시물 : 회원이 Fireside 사이트에 등록하는 문서 등 모든 디지털 컨텐츠를 의미합니다.</p>
                  </li>
                  <li>
                    <p>운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 자를 의미합니다.</p>
                  </li>
                  <li>
                    <p>유료서비스 : 회사가 제공하는 서비스를 회원의 필요에 따라 선택 할 수 있는 옵션 서비스를 말합니다. </p>
                  </li>
                </ul>
              </li>
              <li>
                <h4>제3조 (약관의 효력 및 변경)</h4>
                <p>본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</p>
                <p>본 약관은 회원이 서비스 가입 시 열람 할 수 있으며, 회사는 회원이 원할 때 언제든지 약관을 열람 할 수 있도록 사이트와 애플리케이션내에 게시합니다.</p>
                <p>회사는 "약관의 규제에 관한 법률", "전자상거래 등에서의 소비자보호에 관한 법률", "정보통신망 이용촉진 및 정보보호", "온라인 디지털콘텐츠산업 발전법", "소비자기본법" 등 관련법에 위배되지 않는 범위 내에서 본 약관을 개정할 수 있습니다.</p>
                <p>회사는 필요하다고 인정되는 경우 본 약관을 변경 할 수 있으며, 약관을 변경 할 경우에는 적용일자, 변경사유를 명시하여 적용일자 15일 전부터 공지합니다.</p>
                <p>회사가 제3항에 따라 개정약관을 공지 또는 통지하면서, 회원에게 약관 변경 적용일까지 거부의사를 표시하지 아니할 경우, 약관의 변경에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 회원이 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면, 변경 약관에 동의한 것으로 간주합니다. </p>
                <p>회원은 변경된 약관에 동의하지 아니하는 경우 서비스의 이용을 중단하고 이용계약을 해지할 수 있습니다.</p>
                <p>회원은 약관의 변경에 대하여 주의의무를 다하여야 하며, 변경된 약관의 무지로 인한 회원의 피해는 회사가 책임지지 않습니다.</p>
              </li>
              <li>
                <h4>제4조 (약관 외 준칙)</h4>
                <p>본 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을 경우에는 그 규정에 따릅니다.</p>
                <p>회사는 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 또는 운영원칙을 정할 수 있으며, 본 약관과 개별약관 또는 운영원칙의 내용이 상충되는 경우에는 회사가 정한 내용을 우선으로 적용합니다.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>제2장 서비스 이용 계약</h3>
            <ul>
              <li>
                <h4>제5조 (이용계약의 성립)</h4>
                <p>이용계약은 회원가입 신청자가 본 약관 및 "개인정보처리방침"에 "동의합니다"를 선택하고, 회사가 정한 신청양식을 작성 한 후 서비스의 이용을 신청하면 회사가 이를 승낙함으로써 체결됩니다.</p>
                <p>회사는 가입신청을 완료하였을 때에는 필요한 사항을 확인한 후 지체 없이 이를 승낙 하여야 합니다.</p>
                <p>회원가입 신청자가 전체 항목에 "동의합니다"를 선택하고 신청양식을 작성하는 것은 본 약관 및 "개인정보처리방침"의 내용을 숙지하고, 회사가 서비스 이용을 위해 운영하는 각종 정책과 수시로 공지하는 사항을 준수하는 것에 대해 동의하는 것으로 봅니다.</p>
              </li>
              <li>
                <h4>제6조 (이용계약의 유보 및 거절)</h4>
                <p>회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.</p>
                <ul>
                  <li>
                    <p>1) 가입신청서의 내용을 허위로 기재한 경우</p>
                  </li>
                  <li>
                    <p>2) 다른 사람의 e-mail 인증을 수행하는 경우</p>
                  </li>
                  <li>
                    <p>3) 가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 단 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 함</p>
                  </li>
                  <li>
                    <p>4) 회원의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우</p>
                  </li>
                </ul>
                <p>제1항에 따른 신청에 있어 회사는 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있다.</p>
                <p>회사는 아래 각 호에 해당하는 경우에는 회원등록의 승낙을 유보할 수 있다.</p>
                <ul>
                  <li>
                    <p>1) 제공서비스 설비용량에 현실적인 여유가 없는 경우</p>
                  </li>
                  <li>
                    <p>2) 서비스를 제공하기에는 기술적으로 문제가 있다고 판단되는 경우</p>
                  </li>
                  <li>
                    <p>3) 회사가 재정적, 기술적으로 필요하다고 인정하는 경우</p>
                  </li>
                  <li>
                    <p>4) 기타 귀책사유로 이용승낙이 곤란한 경우</p>
                  </li>
                </ul>
                <p>제1항과 제3항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, 회사는 원칙적으로 이를 가입신청자에게 알립니다.</p>
                <p>이용계약의 성립 시기는 회사가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.</p>
              </li>
              <li>
                <h4>제7조 (회원의 관리책임)</h4>
                <p>회원은 서비스 이용을 위한 아이디, 비밀번호의 관리에 대한 책임 등 회원의 고의?과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 회사의 고의?과실로 인하여 야기된 경우는 회사가 책임을 부담합니다.</p>
                <p>회원은 아이디가 제3자가 사용하고 있음(대여 포함)을 인지한 경우에는 즉시 본인의 비밀번호를 수정하는 등의 조치를 취하여야 하며, 즉시 이를 회사에 통보하여 회사의 안내를 따라야 합니다.</p>
              </li>
              <li>
                <h4>제8조 (개인정보보호 의무)</h4>
                <p>회사는 서비스를 제공하기 위하여 기본적으로 필요한 아이디(이메일)와 비밀번호를 제외한 어떠한 개인정보도 수집하지 않습니다.</p>
                <p>회사는 서비스 제공과 데이터의 출처 표기를 위해서 비밀번호를 제외한 회원이 가입 시 입력한 아이디를 사용할 수 있습니다.</p>
                <p>회사는 회원이 회원 가입 시 입력한 비밀번호에 대해서 고수준의 암호화를 통해 회사 및 제3자가 알아낼 수 없도록 철저히 보호하도록 노력합니다.</p>
                <p>회사의 "개인정보처리방침"은 서비스에 링크된 다른 웹사이트(회사가 운영하지 않는 웹사이트를 말합니다. 이하 같습니다)에서는 적용되지 않습니다.</p>
                <p>회사는 필요한 경우 이러한 업무의 일부 또는 전부를 회사가 선정한 회사에 위탁할 수 있으며, 회원정보의 취급 및 관리, 서비스 운영 등에 관한 업무를 위탁하는 경우에는 "개인정보처리방침"에 공지합니다.</p>
                <p>회사는 회원의 귀책사유로 인해 노출된 정보에 대해서 책임을 지지 않으며, 아래와 같은 경우에는 회원의 정보를 제공 할 수 있습니다.</p>
                <ul>
                  <li>
                    <p>1) 회원이 서비스를 이용함에 있어 관련 법률을 위반하여 수사기관이나 기타 정부 기관으로부터 정보제공을 요청 받는 경우</p>                    
                  </li>
                  <li>
                    <p>2) 회원의 법률위반, 본 서비스 약관위반을 포함하여 부정행위 확인 등 정보보호 업무를 위해 필요한 경우</p>
                  </li>
                  <li>
                    <p>3) 기타 법률에 의해 요구되는 경우</p>
                  </li>
                </ul>
                <p>회사는 "정보통신망법" 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다. 다만, 회사의 공식 사이트 이외의 링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.</p>              
                <p>회사는 상품 결제를 위하여 필요한 최소한의 정보(성명, 주소, 전화번호)를 요구 할 수 있으며, 결제 관련된 금융 정보는 저장하지 않습니다.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>제3장 서비스 이용</h3>
            <ul>
              <li>
                <h4>제 9조 (서비스의 제공)</h4>
                <p>회사는 회원에게 아래와 같은 서비스를 제공합니다.</p>
                <ul>
                  <li>
                    <p>1) Fireside (암호화된 문서의 편집 및 자산화 서비스)</p>
                  </li>
                </ul>
                <p>회원은 회사가 이용신청을 승낙한 때부터 서비스를 사용할 수 있습니다. 회사는 승낙한 때부터 서비스를 개시합니다. 다만, 유료 서비스의 경우 회사가 요금납입을 확인한 직후부터 사용 할 수 있습니다.</p>
              </li>
              <li>
                <h4>제10조 (서비스의 이용시간)</h4>
                <p>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 회사는 서비스를 일정범위로 분할하여 각 범위 별로 이용가능시간을 별도로 지정할 수 있습니다.</p>
                <p>회사는 서비스의 제공에 필요한 경우 수시점검 및 정기점검을 실시할 수 있으며, 점검시간은 서비스 제공화면에 공지한 바에 따릅니다.</p>
              </li>
              <li>
                <h4>제11조 (서비스의 변경 및 중지)</h4>
                <p>회사는 변경될 서비스의 내용 및 제공일자를 제20조에서 정한 방법으로 회원에게 이를 통지하고 서비스를 변경하여 제공할 수 있습니다.</p>
                <p>회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>
                <ul>
                  <li>
                    <p>1) 회원이 회사의 영업활동을 방해하는 경우</p>
                  </li>
                  <li>
                    <p>2) 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</p>
                  </li>
                  <li>
                    <p>3) 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</p>
                  </li>
                  <li>
                    <p>4) 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</p>
                  </li>
                  <li>
                    <p>5) 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우</p>
                  </li>
                  <li>
                    <p>6) 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</p>
                  </li>
                </ul>
                <p>제2항에 의한 서비스 중단의 경우에는 회사가 제21조에서 정한 방법으로 회원에게 통지합니다. 다만, 회사가 통제할 수 없는 사유로 인한 서비스의 중단(운영자의 고의?과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.</p>
                <p>회사는 서비스의 변경, 중지로 발생하는 문제에 대해서는 어떠한 책임도 지지 않습니다.</p>
              </li>
              <li>
                <h4>제12조 (정보의 제공 및 광고의 게재)</h4>
                <p>회원은 서비스 이용 시 노출되는 광고 게재에 대해 동의합니다.</p>
                <p>회사는 서비스 사용자를 대상으로 광고를 제공할 수 있습니다.</p>
                <p>회원이 서비스상에 광고를 이용하거나 서비스를 통한 광고주의 판촉활동에 참여하는 등의 방법으로 교신 또는 거래를 하는 것은 전적으로 회원과 광고주 간의 문제입니다.</p>
                <p>회원과 광고주간에 분쟁, 기타 문제가 발생하는 경우, 회원과 광고주가 직접 해결하여야 하며, 이와 관련하여 회사는 어떠한 책임도 지지 않습니다.</p>
              </li>
              <li>
                <h4>제13조 (게시물의 저작권)</h4>
                <p>회사는 게시한 회원의 동의 없이 게시물을 다른 목적으로 사용할 수 없습니다.</p>
                <p>회사는 회원이 서비스 내에 게시한 게시물이 타인의 저작권, 기타 권리를 침해하더라도 이에 대한 민?형사상의 책임을 부담하지 않습니다. 만일 회원이 타인의 저작권 기타 권리를 침해하였음을 이유로 회사가 타인으로부터 손해배상청구 등 이의제기를 받은 경우, 회원은 회사의 면책을 위하여 노력하여야 하며, 회원은 그로 인해 회사에 발생한 모든 손해를 부담하여야 합니다.</p>
                <p>회사는 회원이 이용계약을 해지하고 사이트를 탈퇴하거나 적법한 사유로 해지된 경우 <span>30일의 유예기간을 제공 후</span> 해당 회원이 게시하였던 게시물을 삭제할 수 있습니다.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>제4장 계약당사자의 의무</h3>
            <ul>
              <li>
                <h4>제14조 (회사의 의무)</h4>
                <p>회사는 서비스 제공 및 보안과 관련된 설비를 지속적이고, 안정적인 서비스 제공에 적합하도록 유지, 점검 또는 복구 등의 조치를 성실히 이행하여야 합니다.</p>
                <p>회사는 관련법과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.</p>
                <p>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위해 보안시스템을 갖추어야 하며 "개인정보처리방침"을 공시하고 준수하며, 회원의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여 노력합니다.</p>
                <p>회사는 서비스이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 e-mail 등을 통하여 회원에게 처리 일정, 과정 및 결과를 전달합니다.</p>
                <p>회사가 제공하는 서비스로 인하여 회원에게 손해가 발생한 경우 그러한 손해가 회사의 고의나 과실에 의해 발생한 경우에 한하여 회사에서 책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다.</p>
                <p>회사는 회원이 수신 동의를 하지 않은 영리 목적의 광고성 e-mail 등을 발송하지 아니합니다.</p>
                <p>회사는 "정보통신망 이용촉진 및 정보보호에 관한 법률", "통신비밀보호법", "전기통신사업법 " 등 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.</p>
              </li>
              <li>
                <h4>제15조 (회원의 의무)</h4>
                <p>회원은 다음 행위를 하여서는 안됩니다.</p>
                <ul>
                  <li>
                    <p>1) 다른 회원의 이메일 및 비밀번호를 도용하여 부당하게 서비스를 이용하거나, 정보를 도용하는 행위</p>
                  </li>
                  <li>
                    <p>2) 타인의 계좌번호 및 신용카드번호 등 타인의 허락 없이 타인의 결제정보를 이용하여 회사의 유료 서비스를 이용하는 행위</p>                    
                  </li>
                  <li>
                    <p>3) 회사가 게시한 정보를 변경하는 행위</p>                    
                  </li>
                  <li>
                    <p>4) 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등을 송신 또는 게시하는 행위</p>
                  </li>
                  <li>
                    <p>5) 회사와 기타 제3자의 저작권 등 지적재산권을 침해하는 행위</p>
                  </li>
                  <li>
                    <p>6) 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
                  </li>
                  <li>
                    <p>7) 회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위</p>
                  </li>
                  <li>
                    <p>8) 회사의 직원이나 서비스의 관리자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위</p>
                  </li>
                  <li>
                    <p>9) 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램 자료를 등록 또는 유포하는 행위</p>
                  </li>
                  <li>
                    <p>10) 회사가 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링, 디컴파일, 디스어셈블 하는 행위</p>
                  </li>
                  <li>
                    <p>11) 다른 회원의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위</p>
                  </li>
                  <li>
                    <p>12) 기타 불법적이거나 부당한 행위</p>
                  </li>
                </ul>
                <p>회원은 관계 법령, 본 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 아니 됩니다.</p>
                <p>회원은 서비스의 이용권한, 기타 서비스 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며 이를 담보로 제공할 수 없습니다.</p>
                <p>회원은 제7조(회원의 관리책임)에서 명시한 비밀번호를 철저히 관리하여야 합니다. 관리소홀, 부정사용 등에 의하여 발생하는 모든 결과에 대한 책임은 회원 본인이 부담하며, 회사는 이에 대한 어떠한 책임도 부담하지 않습니다.</p>
                <p>민법상 미성년자인 회원이 유료 서비스를 이용 할 경우 미성년자인 회원은 결제 전 법정대리인의 동의를 얻어야 합니다.</p>
              </li>
              <li>
                <h4>제16조 (회원에 대한 통지)</h4>
                <p>회사가 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 "홈페이지" 공자사항을 통해 할 수 있습니다.</p>
                <p>회사는 불특정 다수 회원에 대한 통지의 경우 "홈페이지" 등에 게시함으로써 개별 통지에 갈음할 수 있습니다.</p>
              </li>
              <li>
                <h4>제17조 (서비스 이용 해지)</h4>
                <p>회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 사이트 내에 해지신청(탈퇴신청) 메뉴 또는 해지방법에 대한 안내를 통해 해지를 신청할 수 있습니다.</p>
                <p>회사는 등록 해지신청이 접수되면 회원이 원하는 시점 이전에 해당 회원의 서비스 이용을 해지하여야 합니다.</p>
                <p>회원이 계약을 해지할 경우, 관련법 및 개인정보처리방침에 따라 회사가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 데이터는 소멸됩니다.</p>
              </li>
              <li>
                <h4>제18조 (서비스 이용 제한)</h4>
                <p>회사는 회원이 본 약관 및 개별서비스 이용약관을 위반한 경우 경고, 일시적 이용정지, 영구적 이용정지 등의 단계로 서비스 이용을 제한하거나 이용계약을 해지할 수 있습니다.</p>
                <p>회원은 제1항에 따른 서비스 이용정지 기타 서비스 이용과 관련된 이용제한에 대해 회사가 정한 절차에 따라 이의신청을 할 수 있으며, 회사는 회원의 이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용을 재개합니다.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>제5장 기타</h3>
            <ul>
              <li>
                <h4>제19조 (손해 배상)</h4>
                <p>회원이 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 본 약관을 위반한 회원은 회사에 발생하는 모든 손해를 배상하여야 합니다.</p>
                <p>회원이 서비스를 이용하는 과정에서 행한 불법행위나 본 약관 위반행위로 인하여 회사가 당해 회원 이외의 제3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 회원은 자신의 책임과 비용으로 회사를 면책 시켜야 하며, 회사가 면책되지 못한 경우 당해 회원은 그로 인하여 회사에 발생한 모든 손해를 배상하여야 합니다.</p>
              </li>
              <li>
                <h4>제20조 (면책사항)</h4>
                <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면책됩니다.</p>
                <p>회사는 회원의 귀책사유로 인한 서비스의 이용장애에 대하여 책임을 지지 않습니다.</p>
                <p>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그 밖에 서비스를 통하여 얻은 자료로 인한 손해 등에 대하여도 책임을 지지 않습니다. 회사는 회원이 사이트에 게재한 게시물의 정확성 등 내용에 대하여는 책임을 지지 않습니다.</p>
                <p>회사는 회원 상호간 또는 회원과 제3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.</p>
              </li>
              <li>
                <h4>제21조 (분쟁 조정 및 관할법원)</h4>
                <p>회사와 회원 간 제기된 소송은 대한민국법을 준거법으로 합니다.</p>
                <p>서비스 이용과 관련하여 발생한 분쟁에 대한 소송을 제기하는 경우에는 민사소송법상의 법원을 관할법원으로 합니다.</p>
              </li>
            </ul>
          </li>
          <li>
            <h4>부칙</h4>
            <p>[시행일] 본 이용약관은 2021년 11월 12일부터 적용됩니다.</p>
            <p>- 공고일자 : 2021년 11월 12일</p>
            <p>- 시행일자 : 2021년 11월 12일</p>
          </li>
        </ul> 
      </div>
    </section>
  </div>
  <Footer></Footer>
  </>
  );
}

export default Terms;