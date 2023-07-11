import React, { useState } from "react";
import type { Key } from "react";
import {
  Button,
  Form,
  Drawer,
  Table,
  ConfigProvider,
  Descriptions,
  Badge,
} from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: Key;
  name: string;
  type: string;
  value: string;
  touched: boolean;
  error: string[];
  warning: string[];
  validating: boolean;
}

const MAX_FIELDS = 100;

export interface DevToolPanalProps {
  open: boolean;
  onClose: () => void;
}

export function DevToolPanal({ open, onClose }: DevToolPanalProps) {
  const form = Form.useFormInstance();
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const keys = Object.keys(form.getFieldsValue());

  for (let i = 0; i < MAX_FIELDS; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Form.useWatch(keys[i]);
  }

  const columns: ColumnsType<DataType> = [
    {
      dataIndex: "key",
      render: (text, record) => {
        return (
          <Badge size="small">
            <Button
              onClick={() => {
                form.scrollToField(record.key, {
                  behavior: "smooth",
                  scrollMode: "always",
                });
                form.getFieldInstance(record.key)!.focus();
              }}
              size="small"
              type="dashed"
              style={{ margin: 4 }}
            >
              {text}
            </Button>
          </Badge>
        );
      },
    },
    {
      dataIndex: "type",
    },
  ];

  const data: DataType[] = Object.entries(form.getFieldsValue()).map(
    ([key, value]) => {
      return {
        key,
        name: key,
        type: value === undefined ? "???" : typeof value,
        value: JSON.stringify(value),
        touched: form.isFieldTouched(key),
        error: form.getFieldError(key),
        warning: form.getFieldWarning(key),
        validating: form.isFieldValidating(key),
      };
    },
  );

  const expandAll = data.length === expandedRowKeys.length;

  return (
    <ConfigProvider
      theme={{
        token: {
          marginSM: 3,
          padding: 4,
          paddingLG: 6,
          paddingXS: 2,
        },
      }}
    >
      <Drawer
        title="Antd Form DevTools"
        autoFocus={false}
        mask={false}
        maskClosable={false}
        onClose={onClose}
        open={open}
        bodyStyle={{ padding: 0 }}
        extra={
          <Button
            onClick={() =>
              expandAll
                ? setExpandedRowKeys([])
                : setExpandedRowKeys(data.map((x) => x.key))
            }
          >
            {expandAll ? "[-] Collapse All" : "[+] Expand All"}
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          showHeader={false}
          pagination={false}
          rowClassName={(record) =>
            record.error.length > 0 ? "afd-error" : ""
          }
          expandable={{
            expandedRowRender: (record: DataType) => (
              <FromItemPanal {...record} />
            ),
            onExpand: (expanded, record) => {
              if (expanded) {
                setExpandedRowKeys([...expandedRowKeys, record.key]);
              } else {
                setExpandedRowKeys(
                  expandedRowKeys.filter((x) => x !== record.key),
                );
              }
            },
            expandedRowKeys,
            expandedRowClassName: (record) =>
              record.error.length > 0 ? "afd-error" : "",
          }}
        />
      </Drawer>
    </ConfigProvider>
  );
}

function FromItemPanal(record: DataType) {
  return (
    <Descriptions
      size="small"
      column={1}
      labelStyle={{ textAlign: "right", display: "block", flex: 1 }}
    >
      <Descriptions.Item label="Value">{record.value || "-"}</Descriptions.Item>
      <Descriptions.Item label="Touched">
        {String(record.touched)}
      </Descriptions.Item>
      <Descriptions.Item label="Error">{record.error}</Descriptions.Item>
    </Descriptions>
  );
}
