import * as React from "react";
import { LoadedList, DateOfList, DeleteListData } from 'src/types';
import UploadPrices from './ManageUpload/UploadPriceList';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
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
    addingNewDate: boolean;
}

interface DispatchProps {
    init: () => void;
    selectedDateChanged: (value: DateOfList) => void;
    uploadForm: (form: FormData) => void;
    startEditing: () => void;
    stopEditing: () => void;
    deleteList: (list: DeleteListData) => void;
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
        this.props.selectedDateChanged({ fecha: date.toISOString().split('T')[0] });
        this.props.stopEditing();
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
                            {this.props.addingNewDate ? (
                                <Col sm={{ size: 4 }}>
                                    <DatePicker onChange={this.dateChange} clearIcon={null} />
                                </Col> ) : (
                                <Col sm={{ size: 4 }}>
                                    <Button color="info" onClick={this.props.startEditing}>Agregar Nueva Fecha</Button>
                                </Col> 
                                )
                            }
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <UploadPrices uploadForm={this.props.uploadForm} selectedDate={this.props.selectedDate} filteredlistOptions={this.props.filteredlistOptions} deleteList={this.props.deleteList} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ActivityAndErrorIndicator>
        );
    }
}

export default ManageUpload;
