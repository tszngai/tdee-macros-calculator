import {
    Box,
    Center,
    Container,
    Link,
    PopoverBody
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { TextFieldTypes, LocaleTypes } from './types'

const translate = (field : TextFieldTypes, locale: LocaleTypes, props={}) => {
    const translations = {
        languageName: {
            'zh': '中文（台灣）',
            'zh-hk': '中文（香港）',
            'zh-cn': '中文（简体）',
            'en': 'English',
        },
        homeName: {
            'zh': '每日總消耗熱量TDEE計算器',
            'zh-hk': '每日總消耗熱量TDEE計算器',
            'zh-cn': '每日总消耗热量TDEE计算器',
            'en': 'TDEE & Macros Calculator',
        },
        title: {
            'zh': '計算您每日消耗的總熱量（TDEE）和需要攝取的巨量營養素',
            'zh-hk': '計算你每日消耗嘅總熱量（TDEE）同埋需要攝取嘅巨量營養素',
            'zh-cn': '计算您每日消耗的总热量（TDEE）和需要摄取的巨量营养素',
            'en': 'Calculate your Total Daily Energy Expenditure and Recommended Macros Intake',
        },
        description: {
            'zh': '這個計算器可以幫助您準確地計算出您每天所消耗的總熱量，並根據您增肌（bulking）或減脂（cutting）的目標，算出您每天應該攝取的碳水，脂肪和蛋白質（巨量營養素）。',
            'zh-hk': '依個計算器可以幫你準確計出你每日消耗嘅總熱量，並根據你增肌（bulking）或減脂（cutting）嘅目標，計出你每日應該攝取幾多碳水，脂肪同埋蛋白質（巨量營養素）。',
            'zh-cn': '这个计算器可以帮助您准确地计算出您每天所消耗的总热量，并根据您增肌（bulking）或减脂（cutting）的目标，算出您每天应该摄取的碳水，脂肪和蛋白质（巨量营养素）。',
            'en': 'Calculate how many calories you burn every day, and learn how much Macros (carbs, fat and protein) you need to consume per day based on your Bulking/Cutting goal.',
        },
        toggleLight: {
            'zh': '切換至淺色',
            'zh-hk': '轉淺色',
            'zh-cn': '切换至浅色',
            'en': 'Light mode',
        },
        toggleDark: {
            'zh': '切換至深色',
            'zh-hk': '轉深色',
            'zh-cn': '切換至深色',
            'en': 'Dark mode',
        },
        genderWarning: {
            'zh': '請選擇性別',
            'zh-hk': '請選擇性別',
            'zh-cn': '请选择性别',
            'en': 'Please select a gender.',
        },
        ageWarning: {
            'zh': '請輸入年齡',
            'zh-hk': '請輸入年齡',
            'zh-cn': '请输入年龄',
            'en': 'Please provide your age.',
        },
        weightWarning: {
            'zh': '請輸入體重',
            'zh-hk': '請輸入體重',
            'zh-cn': '请输入体重',
            'en': 'Please provide your weight.',
        },
        heightWarning: {
            'zh': '請輸入身高',
            'zh-hk': '請輸入身高',
            'zh-cn': '请输入身高',
            'en': 'Please provide your height.',
        },
        paWarning: {
            'zh': '請選擇閒時運動量',
            'zh-hk': '請選擇閒時運動量',
            'zh-cn': '请选择闲时运动量',
            'en': 'Please select a leisure time physical activity level.',
        },
        sportWarning: {
            'zh': '請輸入每天運動消耗量',
            'zh-hk': '請輸入每天運動消耗量',
            'zh-cn': '请输入每天运动消耗量',
            'en': 'Please provide daily calories burnt during exercises.',
        },
        'gender': {
            'zh': '性別',
            'zh-hk': '性別',
            'zh-cn': '性別',
            'en': 'Gender',
        },
        'male': {
            'zh': '男',
            'zh-hk': '男',
            'zh-cn': '男',
            'en': 'Male',
        },
        'female': {
            'zh': '女',
            'zh-hk': '女',
            'zh-cn': '女',
            'en': 'Female',
        },
        'age': {
            'zh': '年齡',
            'zh-hk': '年齡',
            'zh-cn': '年齡',
            'en': 'Age',
        },
        'weight': {
            'zh': '體重',
            'zh-hk': '體重',
            'zh-cn': '体重',
            'en': 'Weight',
        },
        'height': {
            'zh': '身高',
            'zh-hk': '身高',
            'zh-cn': '身高',
            'en': 'Height',
        },
        'pa': {
            'zh': '請選擇您閒時（在健身房以外的時間）的運動量',
            'zh-hk': '請選擇你閒時（喺gym房以外嘅時間）嘅運動量',
            'zh-cn': '请选择您闲时（在健身房以外的时间）的运动量',
            'en': 'How active are you during your leisure time (time you spend outside of gym)?',
        },
        'sport': {
            'zh': '請輸入您平均每天在健身房（或其他運動場所）所消耗的卡路里量',
            'zh-hk': '請輸入你平均每日喺gym房（或其他運動場所）消耗嘅卡路里量',
            'zh-cn': '请输入您平均每天在健身房（或其他运动场所）所消耗的卡路里量',
            'en': 'How many calories you burn daily (on average) in gym (or other form of exercises)?',
        },
        'bodyFat': {
            'zh': '體脂率',
            'zh-hk': '體脂率',
            'zh-cn': '体脂率',
            'en': 'Body fat',
        },
        'goal': {
            'zh': '健身目標',
            'zh-hk': '健身目標',
            'zh-cn': '健身目标',
            'en': 'Fitness goal',
        },
        'calculate': {
            'zh': '計算',
            'zh-hk': '計算',
            'zh-cn': '计算',
            'en': 'Calculate',
        },
        'metric': {
            'zh': '公制',
            'zh-hk': '公制',
            'zh-cn': '公制',
            'en': 'Metric',
        },
        'imperial': {
            'zh': '英制',
            'zh-hk': '英制',
            'zh-cn': '英制',
            'en': 'Imperial',
        },
        'bodyFatExplained': {
            'zh': '（非必填，但如果您知道自己的體脂率，會令計算結果更加準確）',
            'zh-hk': '（非必填，但如果你知自己嘅體脂率，會令計算結果更加準確）',
            'zh-cn': '（非必填，但如果您知道自己的体脂率，会令计算结果更加准确）',
            'en': ` (Optional. But if you know your body fat, you'll get a more accurate result.)`,
        },
        'paPlaceholder': {
            'zh': '- 請選擇閒時運動量',
            'zh-hk': '- 請選擇閒時運動量',
            'zh-cn': '- 请选择闲时运动量',
            'en': '- Please select your leisure time physical activity level',
        },
        'pa1.2': {
            'zh': '很少活動（整天都基本上是坐著或者躺著，幾乎沒有走動）',
            'zh-hk': '很少活動（基本上成日唔係瞓就係坐，幾乎唔會行路）',
            'zh-cn': '很少活动（整天都基本上是坐着或者躺着，几乎没有走动）',
            'en': 'Sedentary - either sitting or lying most time of the day',
        },
        'pa1.375': {
            'zh': '有稍微的走動（約相當於每天步行2公里左右）',
            'zh-hk': '間中行下（大約相當於每日行2公里左右）',
            'zh-cn': '有稍微的走动（约相当于每天步行2公里左右）',
            'en': 'Lightly active - equivalent daily walking distance of 2km (approximate)',
        },
        'pa1.55': {
            'zh': '中等的活動量（約相當於每天步行4公里左右）',
            'zh-hk': '中等活動量（大約相當於每日行4公里左右）',
            'zh-cn': '中等的活动量（约相当于每天步行4公里左右）',
            'en': 'Moderately active - equivalent daily walking distance of 4km (approximate)',
        },
        'pa1.725': {
            'zh': '相當活躍（約相當於每天步行10公里左右）',
            'zh-hk': '相當活躍（大約相當於每日行10公里左右）',
            'zh-cn': '相当活跃（约相当于每天步行10公里左右）',
            'en': 'Very active - equivalent daily walking distance of 10km (approximate)',
        },
        'pa1.9': {
            'zh': '極度活躍（約相當於每天步行16公里以上）',
            'zh-hk': '極度活躍（大約相當於每日行16公里以上）',
            'zh-cn': '极度活跃（约相当于每天步行16公里以上）',
            'en': 'Extremely active - equivalent daily walking distance of 16km or above (approximate)',
        },
        'sportPlaceholder': {
            'zh': '請輸入每天運動消耗量',
            'zh-hk': '請輸入每日運動消耗量',
            'zh-cn': '请输入每天运动消耗量',
            'en': 'Please provide daily calories burnt during exercises',
        },
        'bodyFatPlaceholder': {
            'zh': '非必填，但如果您知道自己的體脂率，會令計算結果更加準確',
            'zh-hk': '非必填，但如果你知自己嘅體脂率，會令計算結果更加準確',
            'zh-cn': '非必填，但如果您知道自己的体脂率，会令计算结果更加准确',
            'en': `Optional. But if you know your body fat, you'll get a more accurate result.`,
        },
        'goalExplained': {
            'zh': '（這個選擇不會影響您的TDEE計算結果，但會用於計算建議您攝取的營養素）',
            'zh-hk': '（依個選擇唔會影響你嘅TDEE計算結果，但會用於計算建議你攝取嘅營養素）',
            'zh-cn': '（这个选择不会影响您的TDEE计算结果，但会用于计算建议您摄取的营养素）',
            'en': ` (This question won't affect your TDEE result, but will be used to calculate the recommanded macros intake for you.)`,
        },
        'goal-0.2': {
            'zh': '減脂 － 每天攝取TDEE×80%的熱量',
            'zh-hk': '減脂 － 每日攝取TDEE×80%嘅熱量',
            'zh-cn': '减脂 － 每天摄取TDEE×80%的热量',
            'en': 'Cutting - consume 80% of TDEE daily',
        },
        'goal-0.1': {
            'zh': '溫和減脂（減少肌肉流失） － 每天攝取TDEE×90%的熱量',
            'zh-hk': '溫和減脂（減少肌肉流失） － 每日攝取TDEE×90%嘅熱量',
            'zh-cn': '温和减脂（减少肌肉流失） － 每天摄取TDEE×90%的热量',
            'en': 'Cutting slowly (minimizing muscle loss) - consume 90% of TDEE daily',
        },
        'goal0': {
            'zh': '保持體形 － 每天攝取TDEE×100%的熱量',
            'zh-hk': '保持體形 － 每日攝取TDEE×100%嘅熱量',
            'zh-cn': '保持体形 － 每天摄取TDEE×100%的热量',
            'en': 'Maintain weight - consume 100% of TDEE daily',
        },
        'goal0.1': {
            'zh': '溫和增肌（減少體脂積累） － 每天攝取TDEE×110%的熱量',
            'zh-hk': '溫和增肌（減少體脂積累） － 每日攝取TDEE×110%嘅熱量',
            'zh-cn': '温和增肌（减少体脂积累） － 每天摄取TDEE×110%的热量',
            'en': 'Bulking slowly (minimizing fat gain) - consume 110% of TDEE daily',
        },
        'goal0.2': {
            'zh': '增肌 － 每天攝取TDEE×120%的熱量',
            'zh-hk': '增肌 － 每日攝取TDEE×120%嘅熱量',
            'zh-cn': '增肌 － 每天摄取TDEE×120%的热量',
            'en': 'Bulking - consume 120% of TDEE daily',
        },
        'tdeeBoxTitle': {
            'zh': (<Center height='100%' fontSize='x-large' fontWeight='bold'>每日消耗總卡路里</Center>),
            'zh-hk': (<Center height='100%' fontSize='x-large' fontWeight='bold'>每日消耗總卡路里</Center>),
            'zh-cn': (<Center height='100%' fontSize='x-large' fontWeight='bold'>每日消耗总卡路里</Center>),
            'en': (<Center height='100%'><Box fontSize='xx-large' fontWeight='bold'>TDEE</Box>&nbsp;(In Calories)</Center>),
        },
        'tdeeExplainedHolder': {
            'zh': (
                <Container>
                    根據您輸入的數據，視乎您有否提供體脂率，我們會選擇<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>或者<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>計算公式來計算您的TDEE。下表將會顯示出如果您改變您的閒時運動量，您的TDEE將會有何變化。
                </Container>
            ),
            'zh-hk': (
                <Container>
                    根據你輸入嘅數據，視乎你有否提供體脂率，計算器會選擇<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>或者<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>計算公式來計算你嘅TDEE。下表將會顯示出如果你改變你嘅閒時運動量，你嘅TDEE將會有咩變化。
                </Container>
            ),
            'zh-cn': (
                <Container>
                    根据您输入的数据，视乎您有否提供体脂率，我们会选择<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>或者<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>计算公式来计算您的TDEE。下表将会显示出如果您改变您的闲时运动量，您的TDEE将会有何变化。
                </Container>
            ),
            'en': (
                <Container>
                    Depending on whether or not you know your bady fat percentage, we will use either the <span style={{fontStyle: 'italic'}}>Katch-McArdle</span> or the <span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span> formula to calculate your TDEE.
                    The table below will show how your TDEE would differ if you were to change your daily activity level.
                </Container>
            ),
        },
        'tdeeExplainedWithFat': {
            'zh': (
                <Container>
                    根據您提供的數據，我們採用了<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>計算公式，算出您的TDEE約為{props.tdee}卡。<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>公式被公認為是在已知體脂率的情況下計算TDEE最準確的公式。下表顯示出如果您改變您的閒時運動量，您的TDEE將會有何變化。
                </Container>
            ),
            'zh-hk': (
                <Container>
                    根據你提供嘅數據，我哋採用咗<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>計算公式，計到你嘅TDEE約為{props.tdee}卡。<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>公式被公認為係喺已知體脂率嘅情況下計算TDEE最準確嘅公式。下表顯示出如果你改變你嘅閒時運動量，你嘅TDEE將會有咩變化。
                </Container>
            ),
            'zh-cn': (
                <Container>
                    根据您提供的数据，我们采用了<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>计算公式，算出您的TDEE约为{props.tdee}卡。<span style={{fontStyle: 'italic'}}>Katch-McArdle</span>公式被公认为是在已知体脂率的情况下计算TDEE最准确的公式。下表显示出如果您改变您的闲时运动量，您的TDEE将会有何变化。
                </Container>
            ),
            'en': (
                <Container>
                    Based on the data you provided, your TDEE is calculated to be {props.tdee} Calories, using the <span style={{fontStyle: 'italic'}}>Katch-McArdle</span> formula.
                    The <span style={{fontStyle: 'italic'}}>Katch-McArdle</span> formula is widely known as the most accurate formula when body fat percntage is known.
                    The table below shows how your TDEE would differ if you were to change your daily activity level.
                </Container>
            ),
        },
        'tdeeExplainedNoFat': {
            'zh': (
                <Container>
                    根據您提供的數據，我們採用了<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>計算公式，算出您的TDEE約為{props.tdee}卡。<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>公式被公認為是在沒有體脂率數據的情況下計算TDEE最準確的公式。下表顯示出如果您改變您的閒時運動量，您的TDEE將會有何變化。
                </Container>
            ),
            'zh-hk': (
                <Container>
                    根據你提供嘅數據，我哋採用咗<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>計算公式，計到你嘅TDEE約為{props.tdee}卡。<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>公式被公認為係喺冇體脂率數據嘅情況下計算TDEE最準確嘅公式。下表顯示出如果你改變你嘅閒時運動量，你嘅TDEE將會有咩變化。
                </Container>
            ),
            'zh-cn': (
                <Container>
                    根据您提供的数据，我们采用了<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>计算公式，算出您的TDEE约为{props.tdee}卡。<span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span>公式被公认为是在没有体脂率数据的情况下计算TDEE最准确的公式。下表显示出如果您改变您的闲时运动量，您的TDEE将会有何变化。
                </Container>
            ),
            'en': (
                <Container>
                    Based on the data you provided, your TDEE is calculated to be {props.tdee} Calories, using the <span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span> formula.
                    The <span style={{fontStyle: 'italic'}}>Mifflin-St Jeor</span> formula is widely known as the most accurate formula when body fat percntage is unknown.
                    The table below shows how your TDEE would differ if you were to change your daily activity level.
                </Container>
            ),
        },
        'paTitle': {
            'zh': '閒時運動量',
            'zh-hk': '閒時運動量',
            'zh-cn': '闲时运动量',
            'en': 'Leisure Time Activity Level',
        },
        'sedentary': {
            'zh': '很少活動',
            'zh-hk': '很少活動',
            'zh-cn': '很少活动',
            'en': 'Sedentary',
        },
        'lightlyActive': {
            'zh': '稍微走動',
            'zh-hk': '間中行下',
            'zh-cn': '稍微走动',
            'en': 'Lightly Active',
        },
        'moderatelyActive': {
            'zh': '中等活動量',
            'zh-hk': '中等活動量',
            'zh-cn': '中等活动量',
            'en': 'Moderately Active',
        },
        'veryActive': {
            'zh': '相當活躍',
            'zh-hk': '相當活躍',
            'zh-cn': '相当活跃',
            'en': 'Very active',
        },
        'extremelyActive': {
            'zh': '極度活躍',
            'zh-hk': '極度活躍',
            'zh-cn': '极度活跃',
            'en': 'Extremely active',
        },
        'bmrResult': {
            'zh': (<span style={{fontWeight: 'bold', fontSize: 'x-large'}}>您的BMR約為 <span style={{fontSize: 'xx-large'}}>{props.bmr}</span> 卡</span>),
            'zh-hk': (<span style={{fontWeight: 'bold', fontSize: 'x-large'}}>你嘅BMR約為 <span style={{fontSize: 'xx-large'}}>{props.bmr}</span> 卡</span>),
            'zh-cn': (<span style={{fontWeight: 'bold', fontSize: 'x-large'}}>您的BMR约为 <span style={{fontSize: 'xx-large'}}>{props.bmr}</span> 卡</span>),
            'en': (<span style={{fontWeight: 'bold', fontSize: 'x-large'}}>Your BMR is <span style={{fontSize: 'xx-large'}}>{props.bmr}</span> Cal</span>),
        },
        'bmrExplained': {
            'zh': (
                <span>
                    BMR (<span style={{fontStyle: 'italic'}}>Basal Metabolic Rate</span>) 即是基礎代謝率，其反映了你的身體在昏睡狀態下所需要的最低能量。這些能量主要用於維持身體的基本功能，例如心跳，呼吸，維持體溫等等。
                </span>
            ),
            'zh-hk': (
                <span>
                    BMR (<span style={{fontStyle: 'italic'}}>Basal Metabolic Rate</span>) 即係基礎代謝率，佢反映咗你身體喺昏睡狀態下所需要嘅最低能量。呢啲能量主要用於維持身體嘅基本功能，例如心跳，呼吸，維持體溫等等。
                </span>
            ),
            'zh-cn': (
                <span>
                    BMR (<span style={{fontStyle: 'italic'}}>Basal Metabolic Rate</span>) 即是基础代谢率，其反映了你的身体在昏睡状态下所需要的最低能量。这些能量主要用于维持身体的基本功能，例如心跳，呼吸，维持体温等等。
                </span>
            ),
            'en': (
                <span>
                    BMR stands for <span style={{fontStyle: 'italic'}}>Basal Metabolic Rate</span>.
                    This is the minimum energy required to keep you alive if you were in a coma. It is used to maintain basic functionality of your body, such as heart beating, breathing, maintaining internal temperature, etc.
                </span>
            ),
        },
        'calAndMacrosIntake': {
            'zh': '卡路里和營養素建議攝入量',
            'zh-hk': '卡路里和營養素建議攝入量',
            'zh-cn': '卡路里和营养素建议摄入量',
            'en': 'Calories and Macros Intake',
        },
        'calIntakeResult': {
            'zh': (
                <span>
                    根據您的健身目標，建議您應該把<span style={{fontWeight: 'bold'}}>每天總攝入卡路里</span>控制在 <span style={{fontWeight: 'bold', fontSize: 'x-large'}}>{props.calIntake}</span> 卡左右。當然，您也可以根據自己的情況，在下方的輸入框調整這個數值：
                </span>
            ),
            'zh-hk': (
                <span>
                    根據你嘅健身目標，建議你應該將<span style={{fontWeight: 'bold'}}>每日總攝入卡路里</span>控制喺 <span style={{fontWeight: 'bold', fontSize: 'x-large'}}>{props.calIntake}</span> 卡左右。不過當然，你亦都可以根據自己嘅情況，喺下方輸入框調整呢個數值：
                </span>
            ),
            'zh-cn': (
                <span>
                    根据您的健身目标，建议您应该把<span style={{fontWeight: 'bold'}}>每天总摄入卡路里</span>控制在 <span style={{fontWeight: 'bold', fontSize: 'x-large'}}>{props.calIntake}</span> 卡左右。当然，您也可以根据自己的情况，在下方的输入框调整这个数值：
                </span>
            ),
            'en': (
                <span>
                    Based on you fitness goal, your suggested <span style={{fontStyle: 'italic'}}>Total Daily Calories Intake</span> is <span style={{fontWeight: 'bold', fontSize: 'large'}}>{props.calIntake}</span>. If you want, you could adjust this value in the input box below:
                </span>
            ),
        },
        'dailyIntakeGoal': {
            'zh': '目標每天總攝入卡路里：',
            'zh-hk': '目標每日總攝入卡路里：',
            'zh-cn': '目标每天总摄入卡路里：',
            'en': 'Total Daily Calories Intake:',
        },
        'proteinIntakeExplained': {
            'zh': '每天蛋白質的攝入量建議為您總攝入卡路里的30%。' +
                  '您可以調整這個百分比，但請注意20% - 25%是促進肌肉生長所需的最低限度。' +
                  '而通常選擇一個高蛋白的百分比會令您「強迫」自己吃一些更乾淨的食物，並避免那些垃圾食品。' +
                  '如果您想調整這個數值，請修改下方的輸入框：',
            'zh-hk': '每日蛋白質嘅攝入量建議為你總攝入卡路里嘅30%。' +
                     '你可以調整呢個百分比，但請注意20% - 25%係促進肌肉生長所需嘅最低限度。' +
                     '而通常選擇高蛋白百分比會令你「強迫」自己食啲更乾淨嘅食物，並避免垃圾食品。' +
                     '如果你想調整呢個數值，請修改下方嘅輸入框：',
            'zh-cn': '每天蛋白质的摄入量建议为您总摄入卡路里的30%。' +
                     '您可以调整这个百分比，但请注意20% - 25%是促进肌肉生长所需的最低限度。' +
                     '而通常选择一个高蛋白的百分比会令您“强迫”自己吃一些更干净的食物，并避免那些垃圾食品。' +
                     '如果您想调整这个数值，请修改下方的输入框：',
            'en': 'The recommended protein intake is 30% of your total daily calories intake. ' +
                  'You can adjust this percentage if you like but note that 20% - 25% is the lower bar for the amount of protein required for muscle growth. ' +
                  'Usually choosing a higher protein diet would force you to eat more "clean" food and less junk food. ' +
                  'If you would like to choose a different protein intake, edit the box below:',
        },
        'proteinPercentTitle': {
            'zh': '蛋白質（占總卡路里）百分比：',
            'zh-hk': '蛋白質（占總卡路里）百分比：',
            'zh-cn': '蛋白质（占总卡路里）百分比：',
            'en': 'Protein intake percentage:',
        },
        'macros': {
            'zh': '巨量營養素',
            'zh-hk': '巨量營養素',
            'zh-cn': '巨量营养素',
            'en': 'Macros',
        },
        'gram': {
            'zh': '克',
            'zh-hk': '克',
            'zh-cn': '克',
            'en': 'Gram',
        },
        'calories': {
            'zh': '卡路里',
            'zh-hk': '卡路里',
            'zh-cn': '卡路里',
            'en': 'Calories',
        },
        'percentageInCalories': {
            'zh': '卡路里百分比',
            'zh-hk': '卡路里百分比',
            'zh-cn': '卡路里百分比',
            'en': 'Calories%',
        },
        'protein': {
            'zh': '蛋白質',
            'zh-hk': '蛋白質',
            'zh-cn': '蛋白质',
            'en': 'Protein',
        },
        'fat': {
            'zh': '脂肪',
            'zh-hk': '脂肪',
            'zh-cn': '脂肪',
            'en': 'Fat',
        },
        'carbs': {
            'zh': '碳水化合物',
            'zh-hk': '碳水化合物',
            'zh-cn': '碳水化合物',
            'en': 'Carbs',
        },
        'fatCarbsRatio': {
            'zh': '脂肪 : 碳水',
            'zh-hk': '脂肪 : 碳水',
            'zh-cn': '脂肪 : 碳水',
            'en': 'Fat to Carbs Ratio',
        },
        'fatCarbsRatioExplained': {
            'zh': (
                <span>
                    每天的脂肪／碳水（卡路里）攝入比默認設定為40 : 60。但這個比例其實更多是個人喜好，只要不是太極端就不會有太大問題。一般來說，您的活躍程度越高，您的身體就越可能更適應高碳水比例的飲食。
                    <br />
                    <br />
                    雖然脂肪／碳水攝入比只是個人選擇，但也不應該把比例定太低。
                    <span style={{fontWeight: 'bold'}}>一般情況下您的脂肪攝入量應佔每天總卡路里攝入量的15% - 20%。</span>
                    當您的脂肪攝入量低於這個水平時，就會出現各種健康問題，例如皮疹，頭髮乾枯，免疫力減退，以及其他缺乏維生素的徵狀。如果您要調整脂肪／碳水攝入比，請滑動上方的滑條，並觀察您的營養素攝入量會如何變化。
                </span>
            ),
            'zh-hk': (
                <span>
                    每日嘅脂肪／碳水（卡路里）攝入比默認設定為40 : 60。但依個比例其實更多係個人喜好，只要唔係太極端就唔會有太大問題。一般嚟講，你嘅活躍程度愈高，你嘅身體就愈可能更適應高碳水比例嘅飲食。
                    <br />
                    <br />
                    雖然脂肪／碳水攝入比只係個人選擇，但亦都唔應該將佢定得太低。
                    <span style={{fontWeight: 'bold'}}>一般情況下你嘅脂肪攝入量應佔每日總卡路里攝入量嘅15% - 20%。</span>
                    當你嘅脂肪攝入量低過依個水平時，就會出現各種健康問題，例如皮疹，頭髮乾枯，免疫力減退，以及其他缺乏維他命嘅徵狀。如果你要調整脂肪／碳水攝入比，請滑動上方嘅滑條，並觀察你嘅營養素攝入量會有咩變化。
                </span>
            ),
            'zh-cn': (
                <span>
                    每天的脂肪／碳水（卡路里）摄入比默认设定为40 : 60。但这个比例其实更多是个人喜好，只要不是太极端就不会有太大问题。一般来说，您的活跃程度越高，您的身体就越可能更适应高碳水比例的饮食。
                    <br />
                    <br />
                    虽然脂肪／碳水摄入比只是个人选择，但也不应该把比例定得太低。
                    <span style={{fontWeight: 'bold'}}>一般情况下您的脂肪摄入量应占每天总卡路里摄入量的15% - 20%。</span>
                    当您的脂肪摄入量低于这个水平时，就会出现各种健康问题，例如皮疹，头发干枯，免疫力减退，以及其他缺乏维生素的症状。如果您要调整脂肪／碳水摄入比，请滑动上方的滑条，并观察您的营养素摄入量会如何变化。
                </span>
            ),
            'en': (
                <span>
                    The default fat to carbs calories intake ratio is set to 40 : 60. However, you can change this ratio based on your personal preference, as long as it's not too extreme on either side.
                    In general, the more active you are, the more likely your body would like a higher carbs intake.
                    <br />
                    <br />
                    Although the fat to carbs ratio is mostly just a matter of personal choice, keep in mind that you should not set the ratio too low.
                    <span style={{fontWeight: 'bold'}}> Generally your daily fat intake (calorie-wise) needs to be at least 15% - 20% of your total calories intake. </span>
                    Having your fat intake lower than this would lead to health issues like dry rashes, hair loss, weaker immune system, and issues related to vitamin deficiencies.
                    To modify your fat-carbs ratio, move the slider above and see how it affects your daily macros.
                </span>
            ),
        },
        'paTips': {
            'zh': (
                <PopoverBody>
                    請評估您在一天當中除去健身（或其他形式的運動）的時間以外，自己的活躍水平。
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/12782543/' fontStyle='italic' textDecoration='underline' isExternal>
                        請注意研究表明大多數人都很容易高估自己的閒時運動量<ExternalLinkIcon />
                    </Link>。如果您一天裡的絕大多數非健身時間都是坐在電腦前，哪怕您每天都會去健身房，
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/17234257/' fontStyle='italic' textDecoration='underline' isExternal>
                        也請選擇第一個選項：很少活動<ExternalLinkIcon />
                    </Link>。
                    <br />
                    <br />
                    如果您覺得自己的活躍水平介乎於兩個選項之間，請選擇較低的一個。然後如果有需要，您可以再根據自己數週後的進度進行調整。
                </PopoverBody>
            ),
            'zh-hk': (
                <PopoverBody>
                    請評估你喺一日當中除去做gym（或其他形式嘅運動）時間以外，自己嘅活躍水平。
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/12782543/' fontStyle='italic' textDecoration='underline' isExternal>
                        請注意研究表明大多數人都好容易高估自己嘅閒時運動量<ExternalLinkIcon />
                    </Link>。如果你一天裡面嘅絕大多數非健身時間都係坐喺電腦前面，就算你每日都會去做gym，
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/17234257/' fontStyle='italic' textDecoration='underline' isExternal>
                        都請選擇第一個選項：很少活動<ExternalLinkIcon />
                    </Link>。
                    <br />
                    <br />
                    如果你覺得自己嘅活躍水平介乎於兩個選項之間，請選擇較低嗰個。然後如果有需要，你可以再根據自己幾星期後嘅進度進行調整。
                </PopoverBody>
            ),
            'zh-cn': (
                <PopoverBody>
                    请评估您在一天当中除去健身（或其他形式的运动）的时间以外，自己的活跃水平。
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/12782543/' fontStyle='italic' textDecoration='underline' isExternal>
                        请注意研究表明大多数人都很容易高估自己的闲时运动量<ExternalLinkIcon />
                    </Link>。如果您一天里的绝大多数非健身时间都是坐在电脑前，哪怕您每天都会去健身房，
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/17234257/' fontStyle='italic' textDecoration='underline' isExternal>
                        也请选择第一个选项：很少活动<ExternalLinkIcon />
                    </Link>。
                    <br />
                    <br />
                    如果您觉得自己的活跃水平介乎于两个选项之间，请选择较低的一个。然后如果有需要，您可以再根据自己数周后的进度进行调整。
                </PopoverBody>
            ),
            'en': (
                <PopoverBody>
                    This is to identify how active you are during your leisure time when you are not doing exercise.&nbsp;
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/12782543/' fontStyle='italic' textDecoration='underline' isExternal>
                        Please be warned that research has shown most people tend to overestimate their activity level <ExternalLinkIcon />
                    </Link>. If you spend most of your time outside of gym sitting in front of the computer,&nbsp;
                    <Link href='https://pubmed.ncbi.nlm.nih.gov/17234257/' fontStyle='italic' textDecoration='underline' isExternal>
                        please select sedentary <ExternalLinkIcon />
                    </Link>.
                    <br />
                    <br />
                    If you think you are in between two activity levels, choose the lower one.
                    You can always adjust later based on your progress.
                </PopoverBody>
            ),
        },
        'sportTipsTitle': {
            'zh': '運動時燃燒的卡路里',
            'zh-hk': '運動時燃燒嘅卡路里',
            'zh-cn': '运动时燃烧的卡路里',
            'en': 'Calories burnt during exercise',
        },
        'sportTips': {
            'zh': (
                <PopoverBody>
                    請評估您每天在健身（或其他運動形式）時所燃燒的卡路里。這可以包括有氧，跳舞，HIIT，重訓等等。如果您不是每天都運動，請估算您一週內平均每天的運動量。例如，假設您一週健身5次，每次消耗500卡路里，那麼您平均每天的運動消耗就是 500 × 5 ／ 7 = 357 卡路里。
                    <br />
                    <br />
                    您應該大概知道自己在做一些常見的有氧運動時單位時間內消耗的卡路里。至於重訓，每30分鐘的重訓（包含組間休息）通常會消耗 100 至 200 卡路里，視乎您的體重和訓練的強度。
                </PopoverBody>
            ),
            'zh-hk': (
                <PopoverBody>
                    請評估你每日喺健身（或其他運動形式）時所燃燒嘅卡路里。運動可以包括有氧，跳舞，HIIT，重訓等等。如果你唔係每日都運動，請估算你一個禮拜內平均每日嘅運動量。譬如，假設你一個禮拜做5次gym，每次消耗500卡路里，噉你平均每日嘅運動消耗就係 500 × 5 ／ 7 = 357 卡路里。
                    <br />
                    <br />
                    你應該大概知道自己喺做一啲常見嘅有氧運動時單位時間內消耗嘅卡路里。至於重訓，每30分鐘嘅重訓（包含組間休息）通常會消耗 100 至 200 卡路里，視乎你嘅體重同埋訓練強度。
                </PopoverBody>
            ),
            'zh-cn': (
                <PopoverBody>
                    请评估您每天在健身（或其他运动形式）时所燃烧的卡路里。这可以包括有氧，跳舞，HIIT，举铁等等。如果您不是每天都运动，请估算您一周内平均每天的运动量。例如，假设您一周健身5次，每次消耗500卡路里，那么您平均每天的运动消耗就是 500 × 5 ／ 7 = 357 卡路里。
                    <br />
                    <br />
                    您应该大概知道自己在做一些常见的有氧运动时单位时间内消耗的卡路里。至于举铁，每练30分钟（包含组间休息）通常会消耗 100 至 200 卡路里，视乎您的体重和训练的强度。
                </PopoverBody>
            ),
            'en': (
                <PopoverBody>
                    This is to identify how many calories you burn during your everyday exercise session.
                    This might include cardio, dancing, HIIT, weight lifting and so on.
                    If you don't exercise everyday, estimate your daily average in a week.
                    For example, if you hit the gym five times a week, and burn about 500 Calories in each gym seesion,
                    then your daily average would be 500 * 5 / 7 = 357 Calories.
                    <br />
                    <br />
                    For common cardio exercises like bicycling, swimming, jogging, etc. you should be able to have a rough idea of how much energy you burn based on time and intensity.
                    For weight lifting, every 30 minutes of lifting (including rest time between sets) typically burns 100 to 200 Calories, depending on your body weight and intensity.
                </PopoverBody>
            ),
        },
        'feedbackTypes': {
            'zh': ["建議", "錯誤", "其他"],
            'zh-hk': ["建議", "錯誤", "其他"],
            'zh-cn': ["建议", "错误", "其他"],
            'en': ["suggestion", "bug", "other"],
        },
        'postSubmitButtonMsg': {
            'zh': '感謝您的意見！',
            'zh-hk': '多謝你嘅意見！',
            'zh-cn': '感谢您的意见！',
            'en': 'Thanks for the feedback!',
        },
        'submitButtonMsg': {
            'zh': '發送 👋',
            'zh-hk': '發送 👋',
            'zh-cn': '发送 👋',
            'en': 'Send Feedback 👋',
        },
        'website': {
            'en': 'https://www.calculatemacro.com/',
            'zh': 'https://www.calculatemacro.com/zh-tw',
            'zh-hk': 'https://www.calculatemacro.com/zh-hk',
            'zh-cn': 'https://www.calculatemacro.com/zh-cn'
        },
        'shareMsg': {
            'en': 'How many Calories should you eat per day? And how should you distribute them among carbs, fat and protein? Whether you are planning to bulk or cut, this powerful tool will tell you all you need to know about your diet!',
            'zh': '你每天應該吃多少卡路里，多少碳水、脂肪和蛋白質？無論你想增肌還是減脂，這個簡單又好用的網站都能告訴你答案！',
            'zh-hk': '你每日應該食幾多卡路里，幾多碳水、脂肪同蛋白質？無論你係想增肌定減脂，呢個簡單又好用嘅網站都答到你！',
            'zh-cn': '你每天应该吃多少卡路里，多少碳水、脂肪和蛋白质？无论你想增肌还是减脂，这个简单又好用的网站都能告诉你答案！'
        },
        'shareTag': {
            'en': '#sciencediet',
            'zh': '#科學飲食',
            'zh-hk': '#科學飲食',
            'zh-cn': '#科学饮食'
        },
        'tumblrTags': {
            'en': ['science diet', 'calories calculator', 'macros calculator', 'bulking', 'cutting'],
            'zh': ['科學飲食', '卡路里計算', '增肌', '減脂'],
            'zh-hk': ['科學飲食', '卡路里計算', '增肌', '減脂'],
            'zh-cn': ['科学饮食', '卡路里计算', '增肌', '减脂']
        },
    }
    return translations[field][locale]
}

export default translate