// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;
use tauri::Builder;

#[derive(Default)]
pub struct InnerAppState {
    pub items: Vec<String>,
}

impl InnerAppState {
    pub fn append_item(&mut self, value: &str) {
        self.items.push(String::from(value))
    }
}

pub struct AppState(pub Mutex<InnerAppState>);

#[derive(serde::Serialize)]
struct CustomResponse {
    items: Vec<String>,
}

#[tauri::command]
fn append_item(
    window: tauri::Window,
    item: &str,
    state: tauri::State<AppState>,
) -> Result<CustomResponse, String> {
    println!("Called from {}", window.label());

    if item.len() == 0 {
        return Err(String::from("Empty Item"));
    }

    let mut state_guard = state.0.lock().unwrap();
    // Change field of state struct
    state_guard.append_item(item);
    // Call method on state struct

    // Replace state struct; here you need to dereference the guard to get the pointer to the inner value (I think)
    *state_guard = InnerAppState {
        items: state_guard.items.clone(),
    };

    println!("New items {:?}", state_guard.items);

    Ok(CustomResponse {
        items: state_guard.items.clone(),
    })
}

fn main() {
    Builder::default()
        .manage(AppState(Default::default()))
        .invoke_handler(tauri::generate_handler![append_item])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
