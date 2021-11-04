import Feedback from 'feeder-react-feedback'
import "feeder-react-feedback/dist/feeder-react-feedback.css"; 
import translate from '../lib/translate'

const GetFeedback = props => (
    <Feedback
        projectId='617f107fdfa4b700044d805f'
        email={true}
        feedbackTypes={translate('feedbackTypes', props.locale)}
        hoverBorderColor='teal'
        postSubmitButtonMsg={translate('postSubmitButtonMsg', props.locale)}
        primaryColor='#506c67'
        submitButtonMsg={translate('submitButtonMsg', props.locale)}
        zIndex='10'
        subProject={'this website. ' + navigator.language}
    />
)

export default GetFeedback