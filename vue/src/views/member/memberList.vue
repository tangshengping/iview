<template>
    <div>
        <Row class="margin-top-10">
            <Col span="24">
                <Row>
                    <Input v-model="searchConName3" placeholder="请输入姓名搜搜..." style="width: 200px" />
                     <i-select :model.sync="model1" style="width:200px">
                        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                     </i-select>
                     <i-select :model.sync="model1" style="width:200px">
                        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                     </i-select>
                     <i-select :model.sync="model1" style="width:200px">
                        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                     </i-select>
                    <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                </Row>
            </Col>
        </Row>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="ios-keypad"></Icon>&nbsp;会员列表
                    </p>
                    <Row :gutter="10">
                        <Col span="24">
                            <div class="edittable-table-height-con">
                                <can-edit-table refs="table4" v-model="editInlineAndCellData" :editIncell="true" :columns-list="editInlineAndCellColumn" :saveEdit="saveEditInlineIncell" :deleteRow="deleteRowInlineIncell"></can-edit-table>
                            </div>
                        </Col>
                        <Modal :width="900" v-model="showCurrentTableData">
                            <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table>
                        </Modal>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import canEditTable from './components/canEditTable.vue';
import tableData from './components/table_data.js';
export default {
    name: 'editable-table',
    components: {
        canEditTable
    },
    data () {
        return {
            searchConName3: '',
            columnsList: [],
            tableData: [],
            breakConnect: false,
            lowNetSpeed: false,
            editInlineColumns: [],
            editInlineData: [],
            editIncellColumns: [],
            editIncellData: [],
            editInlineAndCellColumn: [],
            editInlineAndCellData: [],
            showCurrentColumns: [],
            showCurrentTableData: false,
            cityList: [
                {
                    value: '1',
                    label: '男'
                },
                {
                    value: '2',
                    label: '女'
                }
            ],
            model1: ''
        };
    },
    methods: {
        handleSearch3 () {
            console.log("search")
        },
        getData () {
            this.columnsList = tableData.table1Columns;
            this.tableData = tableData.table1Data;
            this.editInlineColumns = tableData.editInlineColumns;
            this.editInlineData = tableData.editInlineData;
            this.editIncellColumns = tableData.editIncellColumns;
            this.editIncellData = tableData.editIncellData;
            this.editInlineAndCellColumn = tableData.editInlineAndCellColumn;
            this.editInlineAndCellData = tableData.editInlineAndCellData;
            this.showCurrentColumns = tableData.showCurrentColumns;
        },
        handleNetConnect (state) {
            this.breakConnect = state;
        },
        handleLowSpeed (state) {
            this.lowNetSpeed = state;
        },
        saveEdit (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRow (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        saveEditInline (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRowInline (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        saveEditIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRowIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        saveEditInlineIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRowInlineIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        getCurrentData () {
            this.showCurrentTableData = true;
        }
    },
    created () {
        this.getData();
    }
};
</script>
