// @flow

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import muiDecorator from '../../ThemeDecorator';
import EventsTree from '../../../EventsSheet/EventsTree';
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import { testProject } from '../../GDevelopJsInitializerDecorator';
import { getInitialSelection } from '../../../EventsSheet/SelectionHandler';
import { initialPreferences } from '../../../MainFrame/Preferences/PreferencesContext';

export default {
  title: 'EventsSheet/EventsTree',
  component: EventsTree,
  decorators: [muiDecorator],
};

const eventsTreeTutorials = [
  {
    id: 'intro-event-system',
    title: 'Event system',
    description: 'Description 1',
    thumbnailUrl:
      'https://raw.githubusercontent.com/4ian/GDevelop/master/Core/docs/images/gdlogo.png',
    link: 'https://example.com/tutorial.html',
    type: 'video',
  },
];

export const DefaultMediumScreenScopeInLayout = () => (
  <DragAndDropContextProvider>
    <div className="gd-events-sheet">
      <FixedHeightFlexContainer height={500}>
        <EventsTree
          events={testProject.testLayout.getEvents()}
          project={testProject.project}
          scope={{ layout: testProject.testLayout }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowWidth={'medium'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);

export const DefaultSmallScreenScopeInLayout = () => (
  <DragAndDropContextProvider>
    <div className="gd-events-sheet">
      <FixedHeightFlexContainer height={500}>
        <EventsTree
          events={testProject.testLayout.getEvents()}
          project={testProject.project}
          scope={{ layout: testProject.testLayout }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowWidth={'small'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);

export const DefaultMediumScreenScopeNotInLayout = () => (
  <DragAndDropContextProvider>
    <div className="gd-events-sheet">
      <FixedHeightFlexContainer height={500}>
        <EventsTree
          events={testProject.testLayout.getEvents()}
          project={testProject.project}
          scope={{}}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowWidth={'medium'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);

export const EmptySmallScreenScopeInALayout = () => (
  <DragAndDropContextProvider>
    <div className="gd-events-sheet">
      <FixedHeightFlexContainer height={500}>
        <EventsTree
          events={testProject.emptyEventsList}
          project={testProject.project}
          scope={{ layout: testProject.testLayout }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowWidth={'small'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);
