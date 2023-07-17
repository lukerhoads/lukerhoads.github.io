module Page.Index exposing (Data, Model, Msg, page)

import Content exposing (BlogPost, about, posts)
import DataSource exposing (DataSource)
import Head
import Head.Seo as Seo
import Html exposing (a, div, h2, h3, p, text)
import Html.Attributes exposing (class, href)
import Markdown
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Shared
import View exposing (View)


type alias Model =
    ()


type alias Msg =
    Never


type alias RouteParams =
    {}


page : Page RouteParams Data
page =
    Page.single
        { head = head
        , data = data
        }
        |> Page.buildNoState { view = view }


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = static.data.about
        , locale = Nothing
        , title = "Luke Rhoads"
        }
        |> Seo.website


type alias Data =
    { about : String
    , posts : List BlogPost
    }


data : DataSource Data
data =
    DataSource.map2
        (\about posts -> { about = about, posts = posts })
        about
        posts


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view _ _ static =
    { title = "Luke Rhoads"
    , body =
        [ div [ class "main" ]
            [ p [ class "blog-text" ] <| Markdown.toHtml Nothing static.data.about ]
        , div
            [ class "blog" ]
            [ div
                [ class "blog-header" ]
                [ h2 [] [ text "Blog" ] ]
            , div [ class "blog-items" ]
                (List.map
                    (\post ->
                        a [ href ("blog/" ++ post.slug) ]
                            [ div []
                                [ h3 [] [ text post.title ]
                                , p [] [ text post.description ]
                                ]
                            ]
                    )
                    static.data.posts
                )
            ]
        ]
    }
