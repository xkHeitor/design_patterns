import Button from '../Button';
import Label from '../Label';
import WidgetFactory from '../WidgetFactory';
import DraculaButton from './DraculaButton';
import DraculaLabel from './DraculaLabel';
export default class DraculaWidgetFactory implements WidgetFactory {

    createButton(): Button {
        return new DraculaButton();
    }

    createLabel(): Label {
        return new DraculaLabel();
    }

}