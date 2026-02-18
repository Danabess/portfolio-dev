import caseImg_1 from "../assets/case-item_1.webp"
import caseImg_2 from "../assets/case-item_2.webp"
import caseImg_3 from "../assets/case-item_3.webp"
import caseImg_4 from "../assets/case-item_4.webp"

import aboutImg_1 from "../assets/about_1.webp"
import aboutImg_2 from "../assets/about_2.webp"
import aboutImg_3 from "../assets/about_3.webp"
import aboutImg_4 from "../assets/about_4.webp"
import aboutImg_5 from "../assets/about_5.webp"
import aboutImg_6 from "../assets/about_6.webp"


type ObjStrings = { [props: string]: string }

export interface AllCasesType {
    title: string,
    brief_description: string,
    full_description: string,
    content: string,
    about: {
        images: ObjStrings,
        paragraphs: ObjStrings
    },
}


export const AllCases: AllCasesType[] = [
    {
        title: "The Atlas Project",
        brief_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.q",
        full_description: "// VIDEO_DESCRIPTION // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
        content: caseImg_1,
        about: {
            images: {
                image_1: aboutImg_1,
                image_2: aboutImg_2,
                image_3: aboutImg_3,
                image_4: aboutImg_4,
                image_5: aboutImg_5,
                image_6: aboutImg_6,
            },
            paragraphs: {
                paragraph_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
                paragraph_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
            }
        }
    },
    {
        title: "The Lumen Project",
        brief_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.w",
        full_description: "// VIDEO_DESCRIPTION // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
        content: caseImg_2,
        about: {
            images: {
                image_1: aboutImg_1,
                image_2: aboutImg_2,
                image_3: aboutImg_3,
                image_4: aboutImg_4,
                image_5: aboutImg_5,
                image_6: aboutImg_6,
            },
            paragraphs: {
                paragraph_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
                paragraph_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
            }
        }
    },
    {
        title: "The Snow Project",
        brief_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.e",
        full_description: "// VIDEO_DESCRIPTION // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
        content: caseImg_3,
        about: {
            images: {
                image_1: aboutImg_1,
                image_2: aboutImg_2,
                image_3: aboutImg_3,
                image_4: aboutImg_4,
                image_5: aboutImg_5,
                image_6: aboutImg_6,
            },
            paragraphs: {
                paragraph_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
                paragraph_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
            }
        }
    },
    {
        title: "The Forest Project",
        brief_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.r",
        full_description: "// VIDEO_DESCRIPTION // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
        content: caseImg_4,
        about: {
            images: {
                image_1: aboutImg_1,
                image_2: aboutImg_2,
                image_3: aboutImg_3,
                image_4: aboutImg_4,
                image_5: aboutImg_5,
                image_6: aboutImg_6,
            },
            paragraphs: {
                paragraph_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
                paragraph_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
            }
        }
    },
    {
        title: "The Atlas Project - 2",
        brief_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.t",
        full_description: "// VIDEO_DESCRIPTION // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
        content: caseImg_1,
        about: {
            images: {
                image_1: aboutImg_1,
                image_2: aboutImg_2,
                image_3: aboutImg_3,
                image_4: aboutImg_4,
                image_5: aboutImg_5,
                image_6: aboutImg_6,
            },
            paragraphs: {
                paragraph_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
                paragraph_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                paragraph_5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum pretium convallis. Suspendisse potenti. Vivamus elementum tellus lacus, hendrerit egestas nisi feugiat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus fringilla pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dolor in sagittis feugiat. Nunc iaculis enim felis, sit amet vehicula mi convallis sed. Sed ut auctor elit. Aliquam ac lectus eget purus scelerisque consectetur eu a est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
            }
        }
    },
]