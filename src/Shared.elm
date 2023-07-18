module Shared exposing (Data, Model, Msg(..), SharedMsg(..), template)

import Browser.Navigation
import DataSource
import Html exposing (Html, a, div, h1, img, p, text)
import Html.Attributes exposing (class, href, src, target)
import Pages.Flags
import Pages.PageUrl exposing (PageUrl)
import Path exposing (Path)
import Route exposing (Route)
import SharedTemplate exposing (SharedTemplate)
import View exposing (View)


template : SharedTemplate Msg Model Data msg
template =
    { init = init
    , update = update
    , view = view
    , data = data
    , subscriptions = subscriptions
    , onPageChange = Just OnPageChange
    }


type Msg
    = OnPageChange
        { path : Path
        , query : Maybe String
        , fragment : Maybe String
        }
    | SharedMsg SharedMsg


type alias Data =
    ()


type SharedMsg
    = NoOp


type alias Model =
    { showMobileMenu : Bool
    }


init :
    Maybe Browser.Navigation.Key
    -> Pages.Flags.Flags
    ->
        Maybe
            { path :
                { path : Path
                , query : Maybe String
                , fragment : Maybe String
                }
            , metadata : route
            , pageUrl : Maybe PageUrl
            }
    -> ( Model, Cmd Msg )
init navigationKey flags maybePagePath =
    ( { showMobileMenu = False }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnPageChange _ ->
            ( { model | showMobileMenu = False }, Cmd.none )

        SharedMsg globalMsg ->
            ( model, Cmd.none )


subscriptions : Path -> Model -> Sub Msg
subscriptions _ _ =
    Sub.none


data : DataSource.DataSource Data
data =
    DataSource.succeed ()


header : Html msg
header =
    div [ class "header container" ]
        [ a [ href "/" ] [ h1 [] [ text "Luke Rhoads" ] ]
        , div [ class "icons" ]
            [ div [ class "icon" ]
                [ a [ href "https://github.com/lukerhoads", target "_blank" ]
                    [ img [ src "/images/Github.svg" ] []
                    ]
                ]
            , div [ class "icon" ]
                [ a [ href "https://www.linkedin.com/in/luke-rhoads-283198190", target "_blank" ]
                    [ img [ src "/images/LinkedIn.svg" ] []
                    ]
                ]
            ]
        ]


footer : Html msg
footer =
    div [ class "footer container" ]
        [ p [] [ text "Built in Elm, with ♡" ]
        ]


view :
    Data
    ->
        { path : Path
        , route : Maybe Route
        }
    -> Model
    -> (Msg -> msg)
    -> View msg
    -> { body : Html msg, title : String }
view sharedData page model toMsg pageView =
    { body = div [ class "main" ] (header :: pageView.body ++ [ footer ])
    , title = pageView.title
    }
