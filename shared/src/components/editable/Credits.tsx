import React, { useEffect, useState } from "react";
import { z } from "zod";
import type { InspectorComponentProps, TreeComponentDefinition } from "../componentDefinition";

import { styled, } from "../../styles/stitchesStyles";
import { TextStyle, } from "./Text";
import Textarea from "../editor-inspector/Textarea";
import Field from "../editor-inspector/Field";


const StyledCredits = styled('div', {
    display: 'flex',
    flexDirection: 'column',
});

const FoldContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    position: 'relative',
    overflow: 'hidden',

    transition: 'max-height 0.5s',

    variants: {
        fold: {
            true: {
                maxHeight: 200,
                cursor: 'pointer',

                '&::after': {
                    content: '',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 150,
                    background: 'linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)',
                },
            },
            false: {
                maxHeight: 10000,
                cursor: 'pointer',
                '&::after': {
                    display: 'none',
                },
            }
        }
    },

})

const CreditItem = styled(TextStyle);


const MoreButton = styled('button', {

    fontSize: 16,
    cursor: 'pointer',
    width: 80,
    padding: 8,
    textAlign: 'center',
    border: '1px #ffffff solid',
    backgroundColor: '#ffffff00',
    color: '#ffffff',
    boxSizing: 'border-box',
    marginTop: 16,

    '&:hover': {
        backgroundColor: '#ffffff',
        color: '#000000',
    }
})

export const CreditsPropsSchema = z.object({
    content: z.array(z.string()).optional(),
}).strict();

export const CreditsDefinition: TreeComponentDefinition<"Credits", CreditsProps> = {
    type: "Credits",
    component: Credits,
    propsSchema: CreditsPropsSchema,
    allowChildren: [],
    inspectorComponent: CreditsEditor,
    editorComponent: CreditsViewer,
};

type CreditsProps = z.infer<typeof CreditsPropsSchema>;

/**
 * @param {string[]} content -
 */
function Credits({ content = [] }: CreditsProps) {

    return (<StyledCredits>
        {content.map((el, i) => (<CreditItem key={i} type={'normal'}>{el}</CreditItem>))}
    </StyledCredits>)

}


function CreditsViewer({ node }: InspectorComponentProps<"Credits", CreditsProps>) {
    if (!node.props) {
        return (<div style={{ color: '#888' }}>No media configuration provided.</div>)
    }

    const content = node.props.content ?? [];
    return <Credits content={content} />
}

function CreditsEditor({ node, onChangeProps }: InspectorComponentProps<"Credits", CreditsProps>) {
    const content = Array.isArray(node.props?.content) ? node.props.content : [];
    const initialText = content.join('\n');
    const [textValue, setTextValue] = useState(initialText);

    useEffect(() => {
        setTextValue(initialText);
    }, [initialText]);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            onChangeProps({
                ...(node.props ?? {}),
                content: textValue.split('\n'),
            } as CreditsProps);
        }, 300);

        return () => window.clearTimeout(timeout);
    }, [textValue, node.props, onChangeProps]);

    const flushChanges = () => {
        onChangeProps({
            ...(node.props ?? {}),
            content: textValue.split('\n'),
        } as CreditsProps);
    };

    return (
        <Field label="content" direction="column">
            <Textarea
                rows={10}
                value={textValue}
                placeholder="Enter each credit line on a new row"
                onChange={setTextValue}
                onBlur={flushChanges}
            />
        </Field>
    )
}