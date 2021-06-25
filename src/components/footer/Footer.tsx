/**
 * 页脚
 */

import React from "react";
import { useTranslation } from 'react-i18next'
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        { t('footer.detail') }
      </Typography.Title>
    </Layout.Footer>
  );
};
