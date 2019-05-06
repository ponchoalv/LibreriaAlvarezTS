import * as React from 'react';
import DatePicker from 'react-date-picker';
import Button from 'reactstrap/lib/Button';
import ButtonGroup from 'reactstrap/lib/ButtonGroup';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import { IDateOfList, IDeleteListData, ILoadedList, IToken } from '../types';
import { ActivityAndErrorIndicator } from './commons/ActivityAndErrorIndicator';
import UploadPrices from './ManageUpload/UploadPriceList';
import SelectDate from './TableComponents/SelectDate';
import { SecuredComponent } from './commons/SecuredComponent';

interface IStateProps {
    loading: boolean;
    error: Error | null;
    selectedDate: IDateOfList;
    filteredlistOptions: ILoadedList[];
    listsDateOptions: IDateOfList[];
    addingNewDate: boolean;
    listTypeOptions: string[];
    nuevaPlanilla: boolean;
    token: IToken | null;
}

interface IDispatchProps {
    init: () => void;
    selectedDateChanged: (value: IDateOfList) => void;
    uploadForm: (form: FormData) => void;
    startEditing: () => void;
    deleteList: (list: IDeleteListData) => void;
    clearEditingDate: () => void;
    toggleNuevaPlanilla: () => void;
}

export type IProps = IStateProps & IDispatchProps;

class ManageUpload extends React.Component<IProps, {}> {
    public render() {
        return (
            <SecuredComponent fallbackUrl="/" token={this.props.token}>
                <ActivityAndErrorIndicator loading={this.props.loading} error={this.props.error} initAction={this.props.init} loaded={false} >
                    <h1>Administrar la carga de listas</h1>
                    <p>Fecha selecionada: <b>{this.props.selectedDate.fecha}</b></p>
                    <Container>
                        {this.props.addingNewDate ? (
                            <Row>
                                <Col sm={{ size: 4 }}>
                                    <ButtonGroup>
                                        <DatePicker onChange={this.dateChange} clearIcon={null} value={this.getDate()} locale="es-419" />
                                        <Button color="danger" aria-label="Restablecer" onClick={this.props.clearEditingDate}><span>X</span></Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        ) : (
                                <Row>
                                    <Col sm={{ size: 4 }}  >
                                        <SelectDate listsDateOptions={this.props.listsDateOptions} selectedDate={this.props.selectedDate} selectedDateChanged={this.props.selectedDateChanged} />
                                    </Col>
                                    <Col sm={{ size: 4 }}>
                                        <Button color="info" onClick={this.props.startEditing}>Agregar Nueva Fecha</Button>
                                    </Col>
                                </Row>
                            )
                        }

                        <br />
                        <Row>
                            <Col>
                                <UploadPrices
                                    uploadForm={this.props.uploadForm}
                                    selectedDate={this.props.selectedDate}
                                    filteredlistOptions={this.props.filteredlistOptions}
                                    deleteList={this.props.deleteList}
                                    listTypeOptions={this.props.listTypeOptions}
                                    nuevaPlanilla={this.props.nuevaPlanilla}
                                    toggleNuevaPlanilla={this.props.toggleNuevaPlanilla} />
                            </Col>
                        </Row>
                    </Container>
                </ActivityAndErrorIndicator>
            </SecuredComponent>
        );
    }

    private dateChange: (date: Date | Date[]) => void = (date: Date | Date[]) => {
        this.props.selectedDateChanged({ fecha: (date as Date).toISOString().split('T')[0] });
    }

    private getDate: () => Date = () => {
        const parts = this.props.selectedDate.fecha.split('-');
        const date = new Date(+parts[0], +parts[1] - 1, +parts[2]);
        return date;
    }
}

export default ManageUpload;
