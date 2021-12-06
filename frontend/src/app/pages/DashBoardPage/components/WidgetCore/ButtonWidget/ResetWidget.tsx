/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BoardActionContext } from 'app/pages/DashBoardPage/contexts/BoardActionContext';
import { WidgetContext } from 'app/pages/DashBoardPage/contexts/WidgetContext';
import { FontConfig } from 'app/pages/DashBoardPage/pages/Board/slice/types';
import { darken, getLuminance, lighten } from 'polished';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';

export interface CompProps {}
export const ResetWidget: React.FC<CompProps> = () => {
  const widget = useContext(WidgetContext);
  const { onWidgetsReset } = useContext(BoardActionContext);

  const onQuery = e => {
    e.stopPropagation();
    onWidgetsReset();
  };

  const { name, nameConfig, background } = widget.config;

  return (
    <Wrap {...nameConfig} background={background.color} onClick={onQuery}>
      <span>{name}</span>
    </Wrap>
  );
};

const Wrap = styled.div<FontConfig & { background: string }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${p =>
    `${p.fontStyle} ${p.fontWeight} ${p.fontSize}px ${p.fontFamily}`};
  color: ${p => p.color};

  &:hover {
    background: ${p =>
      getLuminance(p.background) > 0.5
        ? darken(0.05, p.background)
        : lighten(0.05, p.background)};
  }
`;