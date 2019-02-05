import * as React from "react";
import { LoadedList, DateOfList } from 'src/types';
import UploadPrices from './ManageUpload/UploadPriceList';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import SelectDate from './TableComponents/SelectDate';
import Container from 'reactstrap/lib/Container';
import { ActivityAndErrorIndicator } from './commons/ActivityAndErrorIndicator';
import DatePicker from 'react-date-picker';

interface StateProps {
    loading: boolean;
    error: Error;
    selectedDate: DateOfList;
    filteredlistOptions: Array<LoadedList>;
    listsDateOptions: Array<DateOfList>;
}

interface DispatchProps {
    init: () => void;
    selectedDateChanged: (value: DateOfList) => void;
    uploadForm: (form: FormData) => void;
}

export type Props = StateProps & DispatchProps;

class ManageUpload extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.init();
    }

    dateChange = (date: Date) => {
        this.props.selectedDateChanged({fecha: date.toISOString().split('T')[0]})
    }

    render() {
        return (
            <ActivityAndErrorIndicator loading={this.props.loading} error={this.props.error}>
                <div>
                    <h1>Administrar la carga de listas</h1>
                    <p>Fecha selecionada: <b>{this.props.selectedDate.fecha}</b></p>
                    <Container>
                        <Row>
                            <Col sm={{ size: 4 }}  >
                                <SelectDate listsDateOptions={this.props.listsDateOptions} selectedDate={this.props.selectedDate} selectedDateChanged={this.props.selectedDateChanged} />
                            </Col>
                            <Col>
                                <DatePicker onChange={this.dateChange} clearIcon={null}/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <UploadPrices uploadForm={this.props.uploadForm} selectedDate={this.props.selectedDate} filteredlistOptions={this.props.filteredlistOptions} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ActivityAndErrorIndicator>
        );
    }
}

export default ManageUpload;
